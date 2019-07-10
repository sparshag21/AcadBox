import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, of } from 'rxjs';
import { User } from './user';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  courseList = ["MTH101", "ESC101"]

  userDocument$ : Observable<any>;

  uid : string;

  constructor(private afAuth : AngularFireAuth, private afs : AngularFirestore) {
    this.userDocument$ = this.afAuth.authState.pipe(
      switchMap(user => {
        if(user){
          return this.afs.doc<any>('users/'+user.uid).valueChanges();
        }
        else{
          return of({
            name : "",
            username : "Guest",
            roll : "",
            email : "",
            courses : [],
            uid : "guest"
          });
        }
      })
    )
  }
}
