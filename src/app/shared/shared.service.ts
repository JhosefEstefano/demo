import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../pages/Interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private loggedIn = new BehaviorSubject<boolean>(false); // {1}
  
  private AvatarIn = new BehaviorSubject<boolean>(false); // {1}

  get isLoggedIn() {
    return this.loggedIn.asObservable(); // {2}
  }


  get isAvatar() {
    return this.AvatarIn.asObservable(); // {2}
  }

  constructor(private router: Router) { }


  login(user: User){
    if (user.userName !== '' && user.password !== '' ) { // {3}
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }

  logout() {                            // {4}
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
