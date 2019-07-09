import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserDataService } from "../user-data.service";
import { FormControl } from "@angular/forms";
import { startWith, map } from 'rxjs/operators';
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from '../user';
let AddCourseComponent = class AddCourseComponent {
    constructor(userDataService, afs) {
        this.userDataService = userDataService;
        this.afs = afs;
        this.filterControl = new FormControl();
        this.disableUploader = new EventEmitter();
        this.courseList = userDataService.courseList;
        this.userCollection = afs.collection("users");
    }
    ngOnInit() {
        this.filtered = this.filterControl.valueChanges
            .pipe(startWith(""), map(value => this._filter(value)));
    }
    _filter(value) {
        const filterValue = value.toLowerCase();
        return this.courseList.filter(course => course.toLowerCase().indexOf(filterValue) == 0);
    }
    add() {
        if (this.user.courses.indexOf(this.filterControl.value) == -1) {
            this.user.courses.push(this.filterControl.value);
            this.userCollection.doc(this.user.uid).set(this.user);
        }
        this.disableUploader.emit({ disable: 1 });
    }
    back() {
        this.disableUploader.emit({ disable: 1 });
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", User)
], AddCourseComponent.prototype, "user", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], AddCourseComponent.prototype, "disableUploader", void 0);
AddCourseComponent = tslib_1.__decorate([
    Component({
        selector: 'app-add-course',
        templateUrl: './add-course.component.html',
        styleUrls: ['./add-course.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [UserDataService, AngularFirestore])
], AddCourseComponent);
export { AddCourseComponent };
//# sourceMappingURL=add-course.component.js.map