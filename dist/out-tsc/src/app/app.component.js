import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FILES } from './mock-files';
let AppComponent = class AppComponent {
    constructor() {
        this.files = FILES;
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map