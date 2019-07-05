import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserDataService {

  courseList = ["MTH101", "ESC101"]

  constructor() {}
}
