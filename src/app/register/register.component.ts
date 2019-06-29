import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";
import { User } from "../user";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public afAuth : AngularFireAuth) { }

  user : User = {
    name: "",
    username : "",
    password : "",
    confirm : "",
    roll : "",
    email : ""
  }

  ngOnInit() {
  }

  make_user(){
    this.afAuth.auth.createUserWithEmailAndPassword(this.user.email, this.user.password)
      .catch(
        (error) => {
          console.log(error);    
        }
      )
      .then(
        ()=>{
          console.log("registration complete");
        }
      )
  }

  check_validation(){
    var flag=0

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(this.user.email) == false){
      flag=1;
      console.log("Email");
    }

    var pass_reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\w\W]{6,16}/;
    if(!pass_reg.test(this.user.password)){
      flag=1;
      console.log("password");
    }

    if(!/[0-9]{6}/.test(this.user.roll) || this.user.roll.length!=6){
      flag=1;
      console.log("roll");
    }

    if(this.user.password != this.user.confirm){
      flag=1;
      console.log("confirm")
    }

    if(flag){
      console.log("Validation Fail")
    }
    else{
      this.make_user();
    }
  }

}
