import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router : Router, public authService : AuthService) {}

  user = {
    name: "",
    username : "",
    password : "",
    confirm : "",
    roll : "",
    email : ""
  }

  message : any = [];

  notify : string[] = [];

  ngOnInit() {
  }

  make_user(){
    this.authService.register(this.user.email, this.user.password, this.user.name, this.user.username, this.user.roll);   
  }

  display_rules(event){
    if (event){
      this.notify.push("Must contain atleast one of each (a-z), (A-Z), (0-9), (special character)")
    }
    else{
      this.notify=[];
    }
  }

  check_presence(){
    this.message = [];
    if(this.user.name=="" || this.user.username=="" || this.user.password=="" || this.user.confirm=="" || this.user.email=="" || this.user.roll==""){
      this.message.push("All fields are required");
    }
    else{
      this.check_validation();
    }
  }

  check_validation(){
    var flag=0

    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(this.user.email) == false){
      flag=1;
      this.message.push("E-Mail format is wrong");
    }

    var pass_reg = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\w\W]{6,16}/;
    if(!pass_reg.test(this.user.password)){
      flag=1;
      this.message.push("Password does not meet requirements");
    }

    if(this.user.password != this.user.confirm){
      flag=1;
      this.message.push("Passwords do not match");
    }

    if(!/[0-9]{6}/.test(this.user.roll) || this.user.roll.length!=6){
      flag=1;
      this.message.push("Invalid Roll Number")
    }

    if(flag){
      console.log("Validation Fail")
    }
    else{
      this.make_user();
    }
  }

}
