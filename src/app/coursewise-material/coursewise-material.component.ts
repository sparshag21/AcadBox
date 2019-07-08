import {
  Component,
  OnInit
} from '@angular/core';
// import { FILES } from '../mock-files';
import {
  File
} from '../file';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import {
  Observable
} from 'rxjs';
@Component({
  selector: 'app-coursewise-material',
  templateUrl: './coursewise-material.component.html',
  styleUrls: ['./coursewise-material.component.css']
})
export class CoursewiseMaterialComponent implements OnInit {

  courseNo: string;
  category: string;

  itemRef: AngularFirestoreCollection < File > ;
  item$: Observable < File[] > ;

  constructor(private afs: AngularFirestore) {
    // this.itemRef = this.afs.collection('test/test2/test3');
    this.courseNo = "PHY101A";
  }

  showAssignments() {
    this.category = "assignment";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }

  showBooks() {
    this.category = "books";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showEndsems() {
    this.category = "endsem";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showLectures() {
    this.category = "lecture";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showMidsems() {
    this.category = "midsem";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showNotes() {
    this.category = "notes";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showQuizzes() {
    this.category = "quiz";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showOther() {
    this.category = "other";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }


  ngOnInit() {

  }


}