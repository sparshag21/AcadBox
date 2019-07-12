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
  filetype: string;
  // doc: number;
  placeholderofinput: string;
  placeholder2: string;
  isDisable: boolean;
  isDisabled: boolean;

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
    this.isDisable = false;
    this.isDisabled = false;
    // this.placeholderofinput = 'a';
    if (e === 'Quiz') {
      this.placeholderofinput = 'Quiz No.';
    }
    if (e === 'Midsem') {
      this.isDisable = true;
      // this.placeholderofinput = 'a';
    }
    if (e === 'Endsem') {
      this.isDisable = true;
      // this.placeholderofinput = 'a';
    }
    if (e === 'Assignment') {
      this.placeholderofinput = 'Assignment No.';
    }
    if (e === 'Lecture Notes') {
      this.placeholderofinput = 'Lecture No.';
      this.isDisabled = true;
    }
    if (e === 'Class Notes') {
      this.placeholderofinput = 'Class Note No.';
      this.isDisabled = true;
    }
    if (e === 'Books') {
      this.placeholderofinput = 'Name of book';
      this.isDisabled = true;
    }
    if (e === 'Other') {
      this.placeholderofinput = 'Description of file';
      this.isDisabled = true;
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
      description: this.fileName + ' ' + this.filetype,
      uid: this.afs.createId(),
      uploader : {
        username : this.user.username,
        uid : this.user.uid
      },
      raters: {}
    };
    // console.log("uploading");
    this.doccollection.doc(newFile.uid).set(newFile);
    window.alert('Uploaded Successfully\nThanks for your contribution');
  }
}
