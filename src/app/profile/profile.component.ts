import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from "@angular/fire/firestore";
import { User } from "../user";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDocument : AngularFirestoreDocument<User>;
  userData : User;

  sub : any;
  uid : string;

  changeDetails : number = 0;
  changePassword : number = 0;

  constructor(private afs : AngularFirestore, private router : ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.router.params.subscribe( (params) => {
      this.uid = params["uid"];
    })
    this.userDocument = this.afs.doc("users/" + this.uid);
    this.userDocument.valueChanges().subscribe( (user) => {
      this.userData = user;
    })
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
