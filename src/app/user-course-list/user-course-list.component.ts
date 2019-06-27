import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-course-list',
  templateUrl: './user-course-list.component.html',
  styleUrls: ['./user-course-list.component.css']
})
export class UserCourseListComponent implements OnInit {

  courseList=[{name : "ECO101"}, {name : "ECO101"}, {name : "ECO101"}, {name : "ECO101"}, {name : "ECO101"}, {name : "ECO101"}, {name : "ECO101"}, {name : "ECO101"}];

  constructor() { }

  ngOnInit() {
  }

}
