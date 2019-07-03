import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { auth } from "firebase/app";
import { User } from "./user"; 

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  private userDocument : AngularFirestoreDocument<User>;
  userData : Observable<User>;

  constructor( private afs : AngularFirestore ) { }

  fetchCurrentUserData(uid : string){
    localStorage.clear();
    this.userDocument = this.afs.doc("users/" + uid);
    this.userDocument.valueChanges()
      .subscribe( (user) => {
        localStorage.setItem(uid, JSON.stringify(user));
      })
  }
}
