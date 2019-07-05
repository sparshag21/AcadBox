import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { useAnimation } from '@angular/animations';
import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/firestore";
import { User } from "../user";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  userDocument : AngularFirestoreDocument<User>;
  user : User = {
    name : "",
    username : "",
    roll : "",
    email : "",
    courses : [],
    uid : ""
  };
  uid : string = "";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private afs : AngularFirestore, private afAuth : AngularFireAuth, private router : Router) {
    afAuth.auth.onAuthStateChanged( (user) => {
      if(user){
        this.uid = user.uid;
      }
      else{
        this.uid = "guest";
      }
      this.fetchUserData();
    });
  }

  fetchUserData(){
    if(this.uid != "guest"){
      this.userDocument = this.afs.doc<User>("users/" + this.uid);
      this.userDocument.valueChanges().subscribe( (user) => {
        this.user = user;
      })
    }
    else{
      this.user.username = "Guest";
    }
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(["/dashboard"]);
  }

  login(){
    this.router.navigate(["/login"]);
  }

  profile(){
    if(this.uid=="guest"){
      alert("You must be signed in to access this feature");
    }
    else{
      this.router.navigate(["/profile", this.uid]);
    }
  }

  upload(){
    if(this.uid=="guest"){
      alert("You must be signed in to access this feature");
    }
    else{
      this.router.navigate(["/upload", this.uid]);
    }
  }
}
