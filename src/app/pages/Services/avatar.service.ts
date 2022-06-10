import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaveAvatar } from 'ng-avataaars-library';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private nombre = new BehaviorSubject<string>(null!);
  private svg = new BehaviorSubject<string>(null!);
  private avatar = new BehaviorSubject<string>(null!);
  constructor() { }


  cambio(saveAvatar: SaveAvatar, nombre: HTMLInputElement) {
    
  }

}
