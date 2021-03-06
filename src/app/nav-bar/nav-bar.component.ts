import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { useAnimation } from '@angular/animations';
import { User } from "../user";
import { Router } from '@angular/router';
import { UserDataService } from "../user-data.service";
import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  user : any;
  loggedIn = 0;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private router : Router, public userDataService : UserDataService, private afAuth : AngularFireAuth) {
   userDataService.userDocument$.subscribe( (user) => {
     if(user.uid!="guest"){
       this.loggedIn = 1;
      //  console.log(user.uid);
      localStorage.setItem('token', user.uid);
     }
     else{
       this.loggedIn = 0;

     }
     this.user=user;
   }) 
  }

  logout(){
    this.afAuth.auth.signOut();
    this.router.navigate(["/login"]);
    localStorage.removeItem('token');
  }

  login(){
    this.router.navigate(["/login"]);
  }

  landing(){
    this.router.navigate(["/landing-page"])
  }

  profile(){
    if(this.user.uid=="guest"){
      alert("You must be signed in to access this feature");
    }
    else{
      this.router.navigate(["/profile", this.user.uid]);
    }
  }

  upload(){
    if(this.user.uid=="guest"){
      alert("You must be signed in to access this feature");
    }
    else{
      this.router.navigate(["/upload"]);
    }
  }

  customPage(){
    if(this.user.uid=="guest"){
      this.router.navigate(["/about"]);
    }
    else{
      this.router.navigate(["/my-box"]);
    }
  }
}
