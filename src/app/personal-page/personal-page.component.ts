import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import {UserDataService} from "../user-data.service";
import { User } from '../user';

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  user : any;

  constructor(private afAuth: AngularFireAuth, private userDataService : UserDataService) {
  }

  ngOnInit() {
    this.userDataService.userDocument$.subscribe( (user) => {
      console.log(user);
    })
  }

}
