import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from "firebase/app";

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  constructor( private afAuth : AngularFireAuth ) {
  }
}
