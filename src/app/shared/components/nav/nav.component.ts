import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
@ViewChild('toggle') toggle!: ElementRef<HTMLDivElement>
@ViewChild('overlay') overlay!: ElementRef<HTMLDivElement>

  isLoggedIn$!: Observable<boolean>;   

  isOpen: Boolean = false;
  
  constructor(private authService: SharedService) { }
  
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }

  onLogout(){
    this.authService.logout();                      // {3}
  }

  openMenu(){
    this.toggle.nativeElement.classList.toggle("active");
    this.overlay.nativeElement.classList.toggle("open");

  }
}
