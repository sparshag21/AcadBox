import { Component, Input } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { File } from '../file';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../user';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
  doctype: string;
  drivelink: string;
  fileName: string;

  constructor(private breakpointObserver: BreakpointObserver, private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.uid = user.uid;
      }
      else {
        this.uid = 'guest';
      }
      this.fetchUserData();
    });
  }

  fetchUserData() {
    if (this.uid != 'guest') {
      this.userDocument = this.afs.doc<User>('users/' + this.uid);
      this.userDocument.valueChanges().subscribe((user) => {
        this.user = user;
      })
    }
    else {
      this.user.username = 'Guest';
    }
  }

  postfile() {
    this.docs = this.afs.doc<File>('courses/' + this.currcourse);
    this.doccollection = this.docs.collection<File>(this.doctype);
    const newFile: File = {
      link: this.drivelink,
      currcourse: this.currcourse,
      doctype: this.doctype,
      username: this.user.username,
      uid: this.afs.createId(),
      description: this.fileName,
      rating: 0
    };
    // console.log("uploading");
    this.doccollection.doc(newFile.uid).set(newFile);
    window.alert('Uploaded Successfully');
  }
}
