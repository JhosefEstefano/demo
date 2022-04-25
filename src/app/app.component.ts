import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  useAnimation,
  // ...
} from '@angular/animations';
import { moveFromRight, moveFromLeft } from 'ngx-router-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('mediaLuna => check-out', useAnimation(moveFromLeft)),
    ]),
  ]
})
export class AppComponent {
  title = 'abanicoCartas';

  prepareRoute(outlet: RouterOutlet){
    return outlet.activatedRouteData.state;
  }

}
