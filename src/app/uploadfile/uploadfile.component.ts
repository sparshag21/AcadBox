import { Component, Input } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { File } from '../file';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../user';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {
  myform = FormGroup;
  userDocument: AngularFirestoreDocument<User>;
  user: User = {
    name: '',
    username: '',
    roll: '',
    email: '',
    courses: [],
    uid: ''
  };
  uid: string = '';

  doccollection: AngularFirestoreCollection<File>;
  docs: AngularFirestoreDocument<File>;

  currcourse: string;
  year: string;
  sem: string;
  doctype: string;
  drivelink: string;
  fileName: string;
  doc: number;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
      } else {
        this.uid = 'guest';
      }
      this.fetchUserData();
    });
  }
  action(e) {
    // this.fileName = '';
    this.doc = 0;
    if (e === 'Quiz') {
      this.doc = 1;
    }
    if (e === 'Midsem') {
      this.doc = 2;
    }
    if (e === 'Endsem') {
      this.doc = 3;
    }
    if (e === 'Assignment') {
      this.doc = 4;
    }
    if (e === 'Lecture Notes') {
      this.doc = 5;
    }
    if (e === 'Class Notes') {
      this.doc = 6;
    }
    if (e === 'Books') {
      this.doc = 7;
    }
    if (e === 'Other') {
      this.doc = 8;
    }
  }

  fetchUserData() {
    if (this.uid !== 'guest') {
      this.userDocument = this.afs.doc<User>('users/' + this.uid);
      this.userDocument.valueChanges().subscribe((user) => {
        this.user = user;
      });
    } else {
      this.user.username = 'Guest';
    }
  }

  postfile() {
    this.docs = this.afs.doc<File>('course/' + this.currcourse);
    this.doccollection = this.docs.collection<File>(this.doctype);
    const newFile: File = {
      course: this.currcourse,
      year: this.year,
      semester: this.sem,
      doctype: this.doctype,
      link: this.drivelink,
      rating: 0,
      description: this.fileName,
      uid: this.afs.createId(),
      uploader : {
        username : this.user.username,
        uid : this.user.uid
      }
    };
    // console.log("uploading");
    this.doccollection.doc(newFile.uid).set(newFile);
    window.alert('Uploaded Successfully\nThanks for your contribution');
  }
}
