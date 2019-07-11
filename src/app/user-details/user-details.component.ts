import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  @Input() user : User;
  @Output() detailsUp = new EventEmitter<{enable : number}>();
  @Output() passwordUp = new EventEmitter<{disable : number}>();

  constructor() { }

  ngOnInit() {
  }

  updateDetails(){
    this.detailsUp.emit({enable : 1});
  }

  changePassword(){
    this.passwordUp.emit({disable : 0});
  }

}
