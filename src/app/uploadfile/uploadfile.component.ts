import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { File } from '../file';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent implements OnInit {
  user: User;

  userDocument: Observable<User>;
  doccollection: AngularFirestoreCollection<File>;
  docs: AngularFirestoreDocument<File>;

  currcourse: string;
  doctype: string;
  drivelink: string;
  fileName: string;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth) { }

  postfile() {
    this.docs = this.afs.doc<File>('course/' + this.currcourse);
    this.doccollection = this.docs.collection<File>(this.doctype);
    let newFile: File = {
      link: this.drivelink,
      currcourse: this.currcourse,
      doctype: this.doctype,
      username: this.user.username,
      uid: this.afs.createId(),
      description: this.fileName,
      rating: 0
    };
    this.doccollection.doc(newFile.uid).set(newFile);
  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        this.afs.doc<User>('users' + user.uid).valueChanges().subscribe((user) => {
          this.user = user;
        });
      }
    });
  }

}
