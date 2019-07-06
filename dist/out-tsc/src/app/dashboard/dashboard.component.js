import * as tslib_1 from "tslib";
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableFilter } from 'mat-table-filter';
export class Course {
}
const ELEMENT_DATA = [
    { name: 'ESC101A', type: 'IC', dept: 'CSE' },
    { name: 'CHM101A', type: 'IC', dept: '' },
    { name: 'MTH101A', type: 'IC', dept: '' },
    { name: 'PHY103A', type: 'IC', dept: '' },
    { name: 'PSY151A', type: 'HSS', dept: '' },
    { name: 'ECO101A', type: 'HSS', dept: 'ECO' },
    { name: 'AE201A', type: 'DC', dept: 'AE' },
    { name: 'CE211A', type: 'DC', dept: 'CE' },
    { name: 'CS201', type: 'DC', dept: 'CSE' },
    { name: 'ME22A', type: 'DC', dept: 'ME' },
    { name: 'ME22A', type: 'DC', dept: 'ME' },
    { name: 'ME22A', type: 'DC', dept: 'ME' },
    { name: 'ME22A', type: 'DC', dept: 'ME' },
    { name: 'ME22A', type: 'DC', dept: 'ME' },
    { name: 'ME22A', type: 'DC', dept: 'ME' },
    { name: 'ME22A', type: 'DC', dept: 'ME' }
];
let DashboardComponent = class DashboardComponent {
    constructor(router) {
        this.router = router;
        this.displayedColumns = ['name', 'type', 'dept'];
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
        this.types = new FormControl();
        this.typeList = ['IC', 'ESO/SO', 'HSS', 'Departmental Course'];
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    ngOnInit() {
        this.filterEntity = new Course();
        this.filterType = MatTableFilter.ANYWHERE;
    }
    goToCourse() {
        this.router.navigate(["/login"]);
    }
};
DashboardComponent = tslib_1.__decorate([
    Component({
        selector: 'app-dashboard',
        templateUrl: './dashboard.component.html',
        styleUrls: ['./dashboard.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], DashboardComponent);
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map