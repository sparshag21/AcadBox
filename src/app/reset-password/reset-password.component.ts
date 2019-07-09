import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  emailForm = new FormGroup({
    email : new FormControl("", [Validators.required, Validators.email])
  })

  errorMessages=[];

  @Output() cancel = new EventEmitter<{disable : number}>();

  constructor(private afAuth:AngularFireAuth, private router : Router) { }

  ngOnInit() {
  }

  getErrors(){
    return this.emailForm.get("email").hasError("required") ? "This field is required" : 
      this.emailForm.get("email").hasError("email") ? "Email id format is wrong" : '';
  }

  send(){
    this.afAuth.auth.sendPasswordResetEmail(this.emailForm.get("email").value)
      .then( () => {
        alert("Password Reset Email Sent");
        this.cancel.emit({disable : 1});
        this.router.navigate(["\login"]);
      })
      .catch( (error) => {
        this.errorMessages.push(error.message);
      })
  }

  disableChanges(){
    this.cancel.emit({disable : 1});
  }
}
