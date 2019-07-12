import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableFilter } from 'mat-table-filter';
import { Course } from '../course';
import { trigger, transition, style, animate } from '@angular/animations';


const ELEMENT_DATA: Course[] = [
  { name: 'ESC101' ,type: 'IC', dept: 'CSE' },
  { name: 'CHM101' ,type: 'IC', dept: 'CHM' },
  { name: 'CHM102',type: 'IC', dept: 'CHM' },
  { name: 'MTH101' ,type: 'IC', dept: 'MTH' },
  { name: 'MTH102',type: 'IC', dept: 'MTH' },
  { name: 'PHY101',type: 'IC', dept: 'PHY' },
  { name: 'PHY102',type: 'IC', dept: 'PHY' },
  { name: 'PHY103',type: 'IC', dept: 'PHY' },
  { name: 'TA101',type: 'IC', dept: 'CE' },
  { name: 'LIF101',type: 'IC', dept: 'BSBE' },
  { name: 'PSY152' ,type: 'HSS-1', dept: 'HSS' },
  { name: 'ART102',type: 'HSS-1', dept: 'HSS' },
  { name: 'ENG124',type: 'HSS-1', dept: 'HSS' },
  { name: 'PHI143',type: 'HSS-1', dept: 'HSS' },
  { name: 'ECO101',type: 'HSS-1', dept: 'HSS' },
  { name: 'SOC171',type: 'HSS-1', dept: 'HSS' },
  
];
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
  trigger('fade', [
    transition('void => *', [
      style({ background: 'yellow', opacity: 0}),
      animate(2000)
    ])
  ])
  ]
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
  