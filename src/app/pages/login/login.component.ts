import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared/shared.service';
import { User } from '../Interfaces/i-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginModel : User = {
    userName: "",
    password: "",
  }

  constructor(private authService: SharedService) { }

  ngOnInit(): void {
  }


  login(){
    console.log(this.loginModel)
    this.authService.login(this.loginModel); // 
  }

}
