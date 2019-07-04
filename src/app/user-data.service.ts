import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { User } from "./user"; 

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  userDocument : AngularFirestoreDocument<User>;

  currentUserData : Observable<User>;

  constructor( private afs : AngularFirestore ) {}

  fetchUserData(uid : string) {
    this.userDocument = this.afs.doc("users/" + uid);
    this.currentUserData = this.userDocument.valueChanges();
  }

  getUserData() : Observable<any>{
    return this.currentUserData;
  }
}
