import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable, of } from 'rxjs';
import { User } from './user';
import { switchMap, first } from 'rxjs/operators';
import { File } from './file';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  courseList = ["MTH101", "ESC101", "MTH102", "PHY103", "PHY102", "TA101", "CHM101", "CHM102", "PHY101", "SOC171", "ECO101", "PHI143", "ENG124", "ART102", "PSY152", "LIF101"]
  typeList = ['Assignment', 'Endsem', 'Midsem', 'Quiz', 'Lecture Notes', 'Class Notes', 'Other', 'Books', 'Notes']

  userDocument$ : Observable<any>;

  uid : string;
  user : User;

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
    );
    this.userDocument$.subscribe( (user) => {
      this.user = user;
    })
  }

  loggedIn() {
    return !localStorage.getItem('token');
  }

  readCourseData(name : string, doctype : string) : Observable<any>{
    return this.afs.doc<any>("courses/"+name).collection<any>(doctype, ref => ref.orderBy('rating').limit(5)).valueChanges();
  }

  updateRating(file : File, rating : number){
    if(isNaN(rating)){
      rating = 0;
      console.log(rating);
    }
    if(!file.raters || Object.keys(file.raters).indexOf(this.user.uid)==-1){
      file.raters[this.user.uid]=rating;
      file.rating = (file.rating + rating)/(Object.keys(file.raters).length);
    }
    else{
      let pastRate = file.rating;
      let len = (Object.keys(file.raters).length);
      file.rating = (pastRate*len-file.raters[this.user.uid]+rating)/len;
      file.raters[this.user.uid]=rating;
    }
    this.afs.doc('courses/'+file.course+"/"+file.doctype+"/"+file.uid).update(file);
  }

  
}
