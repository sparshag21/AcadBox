import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let AlertBoxComponent = class AlertBoxComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], AlertBoxComponent.prototype, "message", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], AlertBoxComponent.prototype, "color", void 0);
AlertBoxComponent = tslib_1.__decorate([
    Component({
        selector: 'app-alert-box',
        templateUrl: './alert-box.component.html',
        styleUrls: ['./alert-box.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], AlertBoxComponent);
export { AlertBoxComponent };
//# sourceMappingURL=alert-box.component.js.map