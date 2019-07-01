import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { auth } from "firebase/app";
import { User } from "./user"; 

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  userAuthObj : any;

  private userDocument : AngularFirestoreDocument<User>;
  userData : Observable<User>;

  constructor( private afAuth : AngularFireAuth, private afs : AngularFirestore ) {
    afAuth.auth.onAuthStateChanged( (user) => {
      if(user){
        this.userAuthObj = user;
        console.log(user.email);
      }
      else{
        this.userAuthObj = "";
      }
    })
  }
}
