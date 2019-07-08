import { Component, OnInit } from '@angular/core';
// import { FILES } from '../mock-files';
import { File } from '../file';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
@Component({
  selector: 'app-coursewise-material',
  templateUrl: './coursewise-material.component.html',
  styleUrls: ['./coursewise-material.component.css']
})
export class CoursewiseMaterialComponent implements OnInit {

  courseNo: string;
  category: string;
  
  itemRef: AngularFirestoreCollection<File>;
  item$: Observable<File[]>;

  constructor(private afs: AngularFirestore) {
    // this.itemRef = this.afs.collection('courses').doc('PHY101').collection('endsem');
    // this.itemRef = this.afs.collection('test/test2/test3');
    this.courseNo = "PHY101A";
    this.category = "assignment";
    this.itemRef = this.afs.collection(`courses/${this.courseNo}/${this.category}`);
    this.item$ = this.itemRef.valueChanges();
   }

  ngOnInit() {

  }
  

}
