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

  constructor(public afAuth : AngularFireAuth, public afs : AngularFirestore, public router : Router) {
    this.usersCollection = afs.collection<User>("users");
  }

  register(email : string, password : string, name : string, username : string, roll : string){
    this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then( (user) => {
        this.new_user = {
          name : name,
          username : username,
          roll : roll,
          courses : [],
          email : user.user.email,
          uid : user.user.uid
        }
        this.makeUser();
      })
      .catch( (error) => {
        alert(error.message);
      })
   }

   makeUser(){
    const id = this.new_user.uid;
    this.usersCollection.doc(id).set(this.new_user);
    this.router.navigate(["/dashboard"]);
   }
}