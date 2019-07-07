import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { File } from '../file';
import { DomSanitizer } from "@angular/platform-browser";
let ShowFilesComponent = class ShowFilesComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.iurl = this.sanitizer.bypassSecurityTrustResourceUrl(this.files.link);
    }
    ngOnInit() { }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", File)
], ShowFilesComponent.prototype, "files", void 0);
ShowFilesComponent = tslib_1.__decorate([
    Component({
        selector: 'app-show-files',
        templateUrl: './show-files.component.html',
        styleUrls: ['./show-files.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [DomSanitizer])
], ShowFilesComponent);
export { ShowFilesComponent };
//# sourceMappingURL=show-files.component.js.map