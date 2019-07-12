import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *, * => void', [
        style({
          opacity: 0
        }),
        animate(1000)
      ])
    ])
  ]
})

export class AppComponent { }
