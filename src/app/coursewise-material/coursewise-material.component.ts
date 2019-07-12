import {
  Component,
  OnInit
} from '@angular/core';

import {
  ActivatedRoute
} from '@angular/router';

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
import {
  trigger,
  transition,
  style,
  animate
} from '@angular/animations';
@Component({
  selector: 'app-coursewise-material',
  templateUrl: './coursewise-material.component.html',
  styleUrls: ['./coursewise-material.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({
          background: 'yellow',
          opacity: 0
        }),
        animate(2000)
      ])
    ])
  ]
})
export class CoursewiseMaterialComponent implements OnInit {

  courseNo: string;
  category: string;

  itemRef: AngularFirestoreCollection < File > ;
  item$: Observable < File[] > ;

  constructor(private afs: AngularFirestore, private route: ActivatedRoute) {
    // this.itemRef = this.afs.collection('test/test2/test3');
    this.courseNo = this.route.snapshot.paramMap.get('courseid');
  }

  showAssignments() {
    this.category = "Assignment";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }

  showBooks() {
    this.category = "Books";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showEndsems() {
    this.category = "Endsem";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showLectures() {
    this.category = "Lecture";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showMidsems() {
    this.category = "Midsem";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showNotes() {
    this.category = "Lecture Notes";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showNotes1() {
    this.category = "Class Notes";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showQuizzes() {
    this.category = "Quiz";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }
  showOther() {
    this.category = "Other";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
  }


  ngOnInit() {

  }


}