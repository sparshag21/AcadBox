import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  @Input() message : String;
  @Input() color : Boolean;

  constructor() { }

  ngOnInit() {
  }

}
