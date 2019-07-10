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
  typeList = ['Assignment', 'Endsem', 'Midsem', 'Quiz', 'Lecture', 'Other', 'Books', 'Notes']

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

  readCourseData(name : string, doctype : string) : Observable<any>{
    return this.afs.doc<any>("courses/"+name).collection<any>(doctype, ref => ref.orderBy('rating').limit(5)).valueChanges();
  }
}
