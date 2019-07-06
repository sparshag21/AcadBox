import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableFilter } from 'mat-table-filter';


export class Course{
  name: string;
  type: string;
  dept: string;
}


const ELEMENT_DATA: Course[] = [
  { name: 'ESC101A' ,type: 'IC', dept: 'CSE' },
  { name: 'CHM101A' ,type: 'IC', dept: '' },
  { name: 'MTH101A' ,type: 'IC', dept: '' },
  { name: 'PHY103A',type: 'IC', dept: '' },
  { name: 'PSY151A' ,type: 'HSS', dept: '' },
  { name: 'ECO101A',type: 'HSS', dept: 'ECO' },
  { name: 'AE201A',type: 'DC', dept: 'AE' },
  { name: 'CE211A',type: 'DC', dept: 'CE' },
  { name: 'CS201',type: 'DC', dept: 'CSE' },
  { name: 'ME22A' ,type: 'DC', dept: 'ME' },
  { name: 'ME22A' ,type: 'DC', dept: 'ME' },
  { name: 'ME22A' ,type: 'DC', dept: 'ME' },
  { name: 'ME22A' ,type: 'DC', dept: 'ME' },
  { name: 'ME22A' ,type: 'DC', dept: 'ME' },
  { name: 'ME22A' ,type: 'DC', dept: 'ME' },
  { name: 'ME22A' ,type: 'DC', dept: 'ME' }
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['name','type','dept'];

  filterEntity: Course;
  filterType: MatTableFilter;

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  types = new FormControl();
  typeList: string[] = ['IC','ESO/SO','HSS','Departmental Course'];
  
  constructor(private router: Router) { }

  ngOnInit() {

    this.filterEntity = new Course();
    this.filterType = MatTableFilter.ANYWHERE;
  }

  goToCourse(){
    this.router.navigate(["/login"]);
  }

}
  