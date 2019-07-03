import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";
import { User } from "./user";
import { auth } from "firebase/app";
import { Router } from "@angular/router";
import { UserDataService } from "./user-data.service";
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usersCollection : AngularFirestoreCollection<User>;

  new_user : User;

  currentUser = {
    email : "",
    uid : "",
    new : 0
  }

  error_messages = [];

  constructor(public afAuth : AngularFireAuth, public afs : AngularFirestore, public router : Router) {
    this.usersCollection = afs.collection<User>("users");
    afAuth.auth.onAuthStateChanged( (user) => {
      if(user){
        this.currentUser = {
          email : user.email,
          uid : user.uid,
          new : this.currentUser.new
        }
        if(this.currentUser.new){
          this.makeUser();
        }

      }
      else{
        this.currentUser = {
          email : "",
          uid : "",
          new : 0
        }
      }
    })
   }

   register(email : string, password : string, name : string, username : string, roll : string) : Observable<any[]>{
     this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( () => {
        this.currentUser.new=1;
        this.new_user = {
          name : name,
          username : username,
          roll : roll,
          courses : []
        }
      })
      .catch( (error) => {
        this.error_messages.push(error.message);
      })
      return of(this.error_messages);
   }

   makeUser(){
    const id = this.currentUser.uid;
    this.usersCollection.doc(id).set(this.new_user);
    this.router.navigate(["/dashboard"]);
   }
}