import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { IUserSchema } from '../Interfaces/i-user-schema';
import { IMessageSchema } from '../Interfaces/i-message-schema';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  io = io('https://sokcet-io-testing.herokuapp.com/', {
    autoConnect: false,
  });

  constructor() {}

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

  send(content: IMessageSchema, to: string) {
    this.io.emit('send', { content, to });
  }

  onReceive(): Observable<IMessageSchema> {
    return new Observable((subscriber) => {
      this.io.on('receive', (content) => {
        subscriber.next(content);
      });
    });
  }
}
