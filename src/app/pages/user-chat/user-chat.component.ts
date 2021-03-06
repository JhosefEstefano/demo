import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ChatService } from '../Services/chat.service';
import { IMessageSchema } from '../Interfaces/i-message-schema';
import { take } from 'rxjs/operators';
import { ConstantPool } from '@angular/compiler';
import { Observable } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Component({
  selector: 'app-user-chat',
  templateUrl: './user-chat.component.html',
  styleUrls: ['./user-chat.component.scss'],
})
export class UserChatComponent implements OnInit {


  @ViewChild('contenedorDeChat') contenedorDeChat!: ElementRef<HTMLElement>

  formUser!: FormGroup;
  formChat!: FormGroup;

  username!: string;
  userID!: string | null;
  centralID!: string | null;

  chats: IMessageSchema[] = [];

  isLoggedIn$!: Observable<boolean>;
  constructor(private fb: FormBuilder, private chat: ChatService, private authService: SharedService) { }


  ngOnInit(): void {

    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}

    this.formUser = this.fb.group({
      username: [],
    });

    this.formChat = this.fb.group({
      chat: [],
    });

    this.chat.onReceive().subscribe({
      next: (e) => {
        this.chats.push(e);
      },
    });

    this.chat.onReCatchTerminate().subscribe({
      next: () => {
        this.disconnect();

        this.chats.push({
          userID: '',
          message: 'conexion finalizada',
          username: 'Sistema',
        });
      },
    });
  }

  private disconnect() {
    this.formUser.get('username')?.enable();
    this.formUser.get('username')?.reset();
    this.userID = null;
    this.centralID = null;
  }

  connect() {
    this.chats.splice(0, this.chats.length);

    this.username = this.formUser.get('username')?.value;
    this.chat
      .connect(this.username)
      .pipe(take(1))
      .subscribe({
        next: (e) => {
          this.formUser.get('username')?.disable();

          this.userID = e.find((f) => f.username !== 'central')?.userID!;
          this.centralID = e.find((f) => f.username === 'central')?.userID!;

          // console.log(this.userID);
        },
      });
  }

  send() {
    const message = this.formChat.get('chat')?.value;

    this.chats.push({
      message,
      userID: this.userID!,
      username: this.username,
    });

    this.chat.send(
      {
        message,
        userID: this.userID!,
        username: this.username,
      },
      this.centralID!
    );

    this.formChat.reset();
  }


  mostrarChat() {
    this.contenedorDeChat.nativeElement.style.display = "block"
    this.contenedorDeChat.nativeElement.className = ' chat animate__animated animate__pulse'
  }


  ocultarChat() {
    this.contenedorDeChat.nativeElement.style.display = "none";
    this.contenedorDeChat.nativeElement.className = 'chat'



  }
}