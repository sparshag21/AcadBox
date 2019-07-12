import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-login-single-page',
  templateUrl: './login-single-page.component.html',
  styleUrls: ['./login-single-page.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0}),
        animate(2000)
      ])
    ])
    ]
})
export class LoginSinglePageComponent implements OnInit {

  user = {
    email : "",
    password : ""
  }

  messages = [];

  reset=0;

  constructor(private afAuth : AngularFireAuth, private router : Router) { }

  ngOnInit() {
  }

  signInUser(){
    this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
      .then( () => {
        this.router.navigate(["/dashboard"]);
      })
      .catch( (error) => {
        this.messages.push(error.message);
      })
  }

  checkRequired(){
    this.messages = [];
    if(this.user.email=="" || this.user.password==""){
      this.messages.push("All fields are required");
    }
    else{
      this.checkCredentials();
    }
  }

  checkCredentials(){
    let flag = 0;
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(this.user.email) == false){
      flag=1;
      this.messages.push("E-Mail format is wrong");
    }

    if(!flag){
      this.signInUser();
    }
  }

  resetPass(){
    this.reset=1;
  }

  cancelReset(event :any){
    this.reset = 0;
  }

}
