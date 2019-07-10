import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserDataService } from "../user-data.service";
import { User } from "../user";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData : any;

  sub : any;

  changeDetails : number = 0;
  changePassword : number = 0;

  constructor(private userDataService : UserDataService, private router : ActivatedRoute) {
    userDataService.userDocument$.subscribe( (user) => {
      this.userData = user;
    })
   }

  ngOnInit() {
  }

  toggleChangeDetails(event){
    if(event.enable){
      this.changeDetails = 1;
    }
    else{
      this.changeDetails = 0;
    }
  }

  toggleChangePassword(event){
    if(event.disable){
      this.changePassword=0;
    }
    else{
      this.changePassword=1;
    }
  }
}
