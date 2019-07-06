import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { ActivatedRoute } from '@angular/router';
let ProfileComponent = class ProfileComponent {
    constructor(afs, router) {
        this.afs = afs;
        this.router = router;
    }
    ngOnInit() {
        this.sub = this.router.params.subscribe((params) => {
            this.uid = params["uid"];
        });
        this.userDocument = this.afs.doc("users/" + this.uid);
        this.userDocument.valueChanges().subscribe((user) => {
            this.userData = user;
        });
    }
};
ProfileComponent = tslib_1.__decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFirestore, ActivatedRoute])
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map