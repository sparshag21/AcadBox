import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore"; 
import { FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.css']
})
export class UpdateDetailsComponent implements OnInit {

  @Input() user : User;
  usersCollection : AngularFirestoreCollection<User>;

  @Output() detailsDown = new EventEmitter<{enable : number}>();

  errorMessages : string[] = [];

  profileForm = this.fb.group({
    name : ["", Validators.required],
    username : ["", Validators.required],
    email : ["", [Validators.required, Validators.email]],
    roll : ["", [Validators.required, Validators.maxLength(6), Validators.minLength(6)]]
  })

  constructor(private afs : AngularFirestore, private fb : FormBuilder) {
    this.usersCollection = afs.collection("users");
   }

  ngOnInit() {
    this.profileForm.get("name").setValue(this.user.name);
    this.profileForm.get("username").setValue(this.user.username);
    this.profileForm.get("roll").setValue(this.user.roll);
    this.profileForm.get("email").setValue(this.user.email);
  }

  disableChanges(){
    this.detailsDown.emit({enable : 0});
  }

  updateUser(){
    console.log("updating");
    this.errorMessages = [];
    this.user = {
      name : this.profileForm.get("name").value,
      username : this.profileForm.get("username").value,
      email : this.profileForm.get("email").value,
      roll : this.profileForm.get("roll").value,
      courses : this.user.courses,
      uid : this.user.uid
    };
    this.usersCollection.doc(this.user.uid).update(this.user)
      .catch( (errors) => {
        this.errorMessages.push(errors);
      })
    if(this.errorMessages.length==0){
      this.detailsDown.emit({enable : 0});
    }
   }

   getErrors(field : string){
     return this.profileForm.get(field).hasError("required") ? "This field is required" : "";
   }

   getRollErrors(){
     return this.profileForm.get("roll").hasError("required") ? "This field is required" : 
      this.profileForm.get("roll").hasError("minlength") ? "Roll number has to be 6 digits" : 
        this.profileForm.get("roll").hasError("maxlength") ? "Roll number has to be 6 digits" : "";
   }

   getEmailErrors(){
     return this.profileForm.get("email").hasError("required") ? "This field is required" : 
      this.profileForm.get("email").hasError("email") ? "Not a valid email" : 
        "";
   }
}
