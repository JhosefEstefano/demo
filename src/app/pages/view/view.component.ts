import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ViewComponent implements OnInit, AfterViewInit {

  public src!: string;
  public svg!: SafeHtml;
  public nombre!: string;
  constructor(
    private cdRef: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) { }

  ngAfterViewInit(): void {
    let localAvatar = localStorage.getItem("svg");
    this.svg = this.sanitizer.bypassSecurityTrustHtml("<style>svg {width: 30% !important; margin:auto; display:block;}</style>" + (localAvatar ? JSON.parse(localAvatar) : null));


    let localAvatarSelection = localStorage.getItem("avatar");
    let avatarSelection = localAvatarSelection ? JSON.parse(localAvatarSelection) : null;

    let paramsArray: string[] = Object.entries(avatarSelection).map(x => {
      return `${x[0]}=${x[1]}` ; 
    });

    let params: string = paramsArray.join("&");

    this.src = `https://avataaars.io/?${params}`;
    
    let localName = localStorage.getItem("nombre");
    this.nombre = localName ? JSON.parse(localName) : null;
    this.cdRef.detectChanges();
  }

  ngOnInit(): void {
  }

}
