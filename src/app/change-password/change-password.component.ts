import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormBuilder, Validators, FormControl} from "@angular/forms"; 
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

function validatePassword(c : FormControl){
  let regEx = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)[\w\W]{6,16}/;

  return regEx.test(c.value) ? null : {
    validatePassword : {
      valid : false
    }
  }
}

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})

export class ChangePasswordComponent implements OnInit {

  messages = [];

  notify = ["Must contain atleast one of each (a-z), (A-Z), (0-9), (special character)"];

  passwordForm = this.fb.group({
    password : ["", [Validators.required, validatePassword]],
    confirm : ["", [Validators.required, validatePassword]]
  });

  @Output() passwordDown = new EventEmitter<{disable : number}>();

  constructor(private fb : FormBuilder, private afAuth : AngularFireAuth, private router : Router) { }

  ngOnInit() {
  }

  disableChange(){
    this.passwordDown.emit({disable : 1});
  }

  getErrors(controller : string){
    return this.passwordForm.get(controller).hasError("required") ? "This field is required" : 
      this.passwordForm.get(controller).hasError("validatePassword") ? "Password does not meet requirements" : "";
  }

  updatePassword(){
    this.messages=[];
    if(this.passwordForm.get("password").value==this.passwordForm.get("confirm").value){
      let user = this.afAuth.auth.currentUser;
      user.updatePassword(this.passwordForm.get("password").value).then( () => {
          this.afAuth.auth.signOut()
            .then(()=>{this.router.navigate(["\dashboard"])})
            .catch((error) => {this.messages.push(error.message)});
        })
        .catch((error)=>{
          this.messages.push(error.message);
        })
    }

    else{
      this.messages.push("Passwords do not match")
    }
  }

}
