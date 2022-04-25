import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserChatRoutingModule } from './user-chat-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserChatComponent } from './user-chat.component';

@NgModule({
  declarations: [UserChatComponent],
  imports: [CommonModule, ReactiveFormsModule, UserChatRoutingModule],
  exports:[UserChatComponent]
})
export class UserChatModule {}
