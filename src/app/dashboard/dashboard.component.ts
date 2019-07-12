import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableFilter } from 'mat-table-filter';
import { Course } from '../course';


const ELEMENT_DATA: Course[] = [
  { name: 'ESC101A' ,type: 'IC', dept: 'CSE' },
  { name: 'CHM101A' ,type: 'IC', dept: 'CHM' },
  { name: 'CHM102A',type: 'IC', dept: 'CHM' },
  { name: 'MTH101A' ,type: 'IC', dept: 'MTH' },
  { name: 'MTH102A',type: 'IC', dept: 'MTH' },
  { name: 'PHY101A',type: 'IC', dept: 'PHY' },
  { name: 'PHY102A',type: 'IC', dept: 'PHY' },
  { name: 'PHY103A',type: 'IC', dept: 'PHY' },
  { name: 'TA101A',type: 'IC', dept: 'CE' },
  { name: 'LIF101A',type: 'IC', dept: 'BSBE' },
  { name: 'PSY152A' ,type: 'HSS-1', dept: 'HSS' },
  { name: 'ART102A',type: 'HSS-1', dept: 'HSS' },
  { name: 'ENG124A',type: 'HSS-1', dept: 'HSS' },
  { name: 'PHI143A',type: 'HSS-1', dept: 'HSS' },
  { name: 'ECO101A',type: 'HSS-1', dept: 'HSS' },
  { name: 'SOC171A',type: 'HSS-1', dept: 'HSS' },
  
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

  goToCourse(row){
    this.router.navigate(['/course-material',row['name']]);
  }

}
  