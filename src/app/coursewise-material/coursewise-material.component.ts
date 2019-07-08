import { Component, OnInit } from '@angular/core';
import { FILES } from '../mock-files';
import { File } from '../file';

import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";

@Component({
  selector: 'app-coursewise-material',
  templateUrl: './coursewise-material.component.html',
  styleUrls: ['./coursewise-material.component.css']
})
export class CoursewiseMaterialComponent implements OnInit {

  constructor() { }

  files :File[] =  FILES;

  ngOnInit() {
  }
  

}
