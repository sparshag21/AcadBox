import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserDataService } from "../user-data.service";
import { FormControl } from "@angular/forms";
import { startWith, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { User } from '../user';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  userCollection : AngularFirestoreCollection<User>;

  filterControl  = new FormControl();
  courseList : string[];
  filtered : Observable<string[]>;
  @Input() user : User;
  @Output() disableUploader = new EventEmitter<{disable : number}>();

  constructor(private userDataService : UserDataService, private afs : AngularFirestore) {
    this.courseList = userDataService.courseList;
    this.userCollection = afs.collection<User>("users");
  }

  ngOnInit() {
    this.filtered = this.filterControl.valueChanges
      .pipe(
        startWith(""),
        map(value => this._filter(value))
      );
  }

  private _filter(value : string) : string[]{
    const filterValue = value.toLowerCase();
    return this.courseList.filter( course => course.toLowerCase().indexOf(filterValue)==0);
  }

  add(){
    if(this.user.courses.indexOf(this.filterControl.value) == -1){
      this.user.courses.push(this.filterControl.value);
      this.userCollection.doc(this.user.uid).set(this.user);
    }
    this.disableUploader.emit( {disable : 1} );
  }

  back(){
    this.disableUploader.emit( {disable : 1} );
  }

}