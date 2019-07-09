import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { User } from '../user';
let UserDetailsComponent = class UserDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", User)
], UserDetailsComponent.prototype, "user", void 0);
UserDetailsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-user-details',
        templateUrl: './user-details.component.html',
        styleUrls: ['./user-details.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], UserDetailsComponent);
export { UserDetailsComponent };
//# sourceMappingURL=user-details.component.js.map