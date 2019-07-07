import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
let LoginSinglePageComponent = class LoginSinglePageComponent {
    constructor(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
        this.user = {
            email: "",
            password: ""
        };
        this.messages = [];
    }
    ngOnInit() {
    }
    signInUser() {
        this.afAuth.auth.signInWithEmailAndPassword(this.user.email, this.user.password)
            .then(() => {
            this.router.navigate(["/dashboard"]);
        })
            .catch((error) => {
            this.messages.push(error.message);
        });
    }
    checkRequired() {
        this.messages = [];
        if (this.user.email == "" || this.user.password == "") {
            this.messages.push("All fields are required");
        }
        else {
            this.checkCredentials();
        }
    }
    checkCredentials() {
        let flag = 0;
        var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (reg.test(this.user.email) == false) {
            flag = 1;
            this.messages.push("E-Mail format is wrong");
        }
        if (!flag) {
            this.signInUser();
        }
    }
};
LoginSinglePageComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login-single-page',
        templateUrl: './login-single-page.component.html',
        styleUrls: ['./login-single-page.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, Router])
], LoginSinglePageComponent);
export { LoginSinglePageComponent };
//# sourceMappingURL=login-single-page.component.js.map