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
}
