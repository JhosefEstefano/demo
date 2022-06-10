import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { IUserSchema } from '../Interfaces/i-user-schema';
import { IMessageSchema } from '../Interfaces/i-message-schema';

@Injectable({
  providedIn: 'root',
})
//
export class ChatService {
  io = io('https://calm-inlet-24431.herokuapp.com/', {
    autoConnect: false,
  });

  constructor() { }
  //Inicia la conexion con el server y la central
  connect(username: string): Observable<IUserSchema[]> {
    return new Observable((subscriber) => {
      this.io.auth = {
        username,
      };

      this.io.connect();

      this.io.on('users', (users) => {
        subscriber.next(users);
      });
    });
  }


  //Este manda los mensajes
  send(content: IMessageSchema, to: string) {
    this.io.emit('send', { content, to });
  }


  //Este revice los mensajes
  onReceive(): Observable<IMessageSchema> {
    return new Observable((subscriber) => {
      this.io.on('receive', (content) => {
        subscriber.next(content);
      });
    });
  }

  //Este captura el evento que termina la conexion emitiendo otro evento de cath-terminate

  onReCatchTerminate(): Observable<any> {
    return new Observable((subscriber) => {
      this.io.on('re-catch-terminate', () => {
        this.io.emit('catch-terminate');
        subscriber.next();
      });
    });
  }
}
