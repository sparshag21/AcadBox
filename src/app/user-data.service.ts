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

  courseList = ["MTH101", "ESC101"]
  typeList = ['Assignment', 'Endsem', 'Midsem', 'Quiz', 'Lecture', 'Other', 'Books', 'Notes']

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

  readCourseData(name : string, doctype : string) : Observable<any>{
    return this.afs.doc<any>("courses/"+name).collection<any>(doctype, ref => ref.orderBy('rating').limit(5)).valueChanges();
  }

  updateRating(file : File, rating : number){
    if(Object.keys(file.raters).indexOf(this.user.uid)==-1){
      file.raters[this.user.uid]=rating;
      file.rating = (file.rating + rating)/(Object.keys(file.raters).length);
    }
    else{
      file.rating = (file.rating-file.raters[this.user.uid]+rating)/(Object.keys(file.raters).length);
      file.raters[this.user.uid]=rating;
    }
    this.afs.doc('courses/'+file.course+"/"+file.doctype+"/"+file.uid).update(file);
  }
}
