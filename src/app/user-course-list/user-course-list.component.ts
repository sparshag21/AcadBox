import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore"; 
import { User } from "../user";

@Component({
  selector: 'app-user-course-list',
  templateUrl: './user-course-list.component.html',
  styleUrls: ['./user-course-list.component.css']
})
export class UserCourseListComponent implements OnInit {

  userCollection : AngularFirestoreCollection<User>;

  @Input() user : User;

  constructor(private afs : AngularFirestore) { 
    this.userCollection = afs.collection("/users");
  }

  ngOnInit() {}

  removeCourse(course : string){
    this.user.courses = this.user.courses.filter( (value, index, arr) => {
      return (value==course ? "" : value);
    })
    this.userCollection.doc(this.user.uid).set(this.user);
  }

}
