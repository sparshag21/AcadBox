import { Component, OnInit } from '@angular/core';
import { UserDataService } from "../user-data.service";

@Component({
  selector: 'app-personal-page',
  templateUrl: './personal-page.component.html',
  styleUrls: ['./personal-page.component.css']
})
export class PersonalPageComponent implements OnInit {

  user : any;

  constructor(private userDataService : UserDataService) { 
    userDataService.userDocument$.subscribe( (user) => {
      this.user = user;
    })
  }

  ngOnInit() {
  }

}
