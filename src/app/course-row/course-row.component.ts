import { Component, OnInit, Input } from '@angular/core';
import { UserDataService } from "../user-data.service";
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-course-row',
  templateUrl: './course-row.component.html',
  styleUrls: ['./course-row.component.css']
})
export class CourseRowComponent implements OnInit {

  @Input() course : string;

  docList : any;
  doctypeControl = new FormControl("Endsem");
  data : any;

  constructor(private userDataService : UserDataService) { 
    this.docList = userDataService.typeList;
  }

  ngOnInit() {
    this.userDataService.readCourseData(this.course, 'Endsem').subscribe( (data) => {
      this.data = data;
    })

    this.doctypeControl.valueChanges.subscribe( (value) => {
      this.userDataService.readCourseData(this.course, value).subscribe( (data) => {
        this.data = data;
        console.log(data);
      })
    })
  }

}
