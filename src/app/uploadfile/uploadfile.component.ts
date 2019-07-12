import { Component, Input, EventEmitter, Output } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from "@angular/fire/storage";
import { File } from '../file';
import { User } from '../user';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { UserDataService } from "../user-data.service";
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-uploadfile',
  templateUrl: './uploadfile.component.html',
  styleUrls: ['./uploadfile.component.css']
})
export class UploadfileComponent {

  @Input() file : any;

  myform = FormGroup;
  userDocument: AngularFirestoreDocument<User>;
  user: User;

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

  constructor(private afs: AngularFirestore, private userDataService: UserDataService, private afStor : AngularFireStorage, private router : Router) {
    userDataService.userDocument$.subscribe( (user) => {
      this.user = user;
    })
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
  // postfile() {
  //   this.docs = this.afs.doc<File>('course/' + this.currcourse);
  //   this.doccollection = this.docs.collection<File>(this.doctype);
  //   const newFile: File = {
  //     course: this.currcourse,
  //     year: this.year,
  //     semester: this.sem,
  //     doctype: this.doctype,
  //     link: this.drivelink,
  //     rating: 0,
  //     description: this.fileName + ' ' + this.filetype,
  //     uid: this.afs.createId(),
  //     uploader : {
  //       username : this.user.username,
  //       uid : this.user.uid
  //     },
  //     raters: {}
  //   };
  //   // console.log("uploading");
  //   this.doccollection.doc(newFile.uid).set(newFile);
  //   window.alert('Uploaded Successfully\nThanks for your contribution');
  // }

  postFile(){
    const file = this.file;
    const filePath = this.file.name;
    const ref = this.afStor.ref(filePath);
    const task = ref.put(file);
    let link : Observable<any>;
    task.snapshotChanges().pipe(
      finalize(() => {link = ref.getDownloadURL(); link.subscribe( (url) => {
        let newFile : File = {
          link : url,
          year : this.year,
          semester : this.sem,
          doctype : this.doctype,
          course : this.currcourse,
          rating : 0,
          raters : {},
          uid : this.afs.createId(),
          description : (this.filetype ? this.filetype : '') + " " + (this.fileName ? this.fileName : ''),
          uploader : {
            username : this.user.username,
            uid : this.user.uid
          }
        };
        this.afs.collection("courses/"+this.currcourse+"/"+this.doctype+"/").doc(newFile.uid).set(newFile);
        this.afs.collection("users/"+this.user.uid+"/"+"files").doc(newFile.uid).set(newFile);
        this.router.navigate(["/dashboard"]);
      })})
    ).subscribe()
  }
}
