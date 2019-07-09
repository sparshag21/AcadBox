import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { User } from "../user";
let UserCourseListComponent = class UserCourseListComponent {
    constructor(afs) {
        this.afs = afs;
        this.uploader = 0;
        this.userCollection = afs.collection("/users");
    }
    ngOnInit() { }
    removeCourse(course) {
        this.user.courses = this.user.courses.filter((value, index, arr) => {
            return (value == course ? "" : value);
        });
        this.userCollection.doc(this.user.uid).set(this.user);
    }
    enableUploader() {
        this.uploader = 1;
    }
    disableUploader(event) {
        if (event) {
            this.uploader = 0;
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", User)
], UserCourseListComponent.prototype, "user", void 0);
UserCourseListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-course-list',
        templateUrl: './user-course-list.component.html',
        styleUrls: ['./user-course-list.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore])
], UserCourseListComponent);
export { UserCourseListComponent };
//# sourceMappingURL=user-course-list.component.js.map