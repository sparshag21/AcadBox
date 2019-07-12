import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {

  files : [];

  constructor(private afStor : AngularFireStorage) { }

  ngOnInit() {
  }

  loadFile(event){
    this.files = event.target.files;
  }

  uploadFile(){
  }
}
