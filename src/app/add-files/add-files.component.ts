import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from "@angular/fire/storage";

@Component({
  selector: 'app-add-files',
  templateUrl: './add-files.component.html',
  styleUrls: ['./add-files.component.css']
})
export class AddFilesComponent implements OnInit {

  files : any;

  constructor(private afStor : AngularFireStorage) { }

  ngOnInit() {
  }

  loadFile(event){
    this.files = event.target.files;
  }

}
