import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AngularFirestore } from "@angular/fire/firestore";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';
let NavBarComponent = class NavBarComponent {
    constructor(breakpointObserver, afs, afAuth, router) {
        this.breakpointObserver = breakpointObserver;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.user = {
            name: "",
            username: "",
            roll: "",
            email: "",
            courses: [],
            uid: ""
        };
        this.uid = "";
        this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
            .pipe(map(result => result.matches));
        afAuth.auth.onAuthStateChanged((user) => {
            if (user) {
                this.uid = user.uid;
            }
            else {
                this.uid = "guest";
            }
            this.fetchUserData();
        });
    }
    fetchUserData() {
        if (this.uid != "guest") {
            this.userDocument = this.afs.doc("users/" + this.uid);
            this.userDocument.valueChanges().subscribe((user) => {
                this.user = user;
            });
        }
        else {
            this.user.username = "Guest";
        }
    }
    logout() {
        this.afAuth.auth.signOut();
        this.router.navigate(["/dashboard"]);
    }
    login() {
        this.router.navigate(["/login"]);
    }
    profile() {
        if (this.uid == "guest") {
            alert("You must be signed in to access this feature");
        }
        else {
            this.router.navigate(["/profile", this.uid]);
        }
    }
    upload() {
        if (this.uid == "guest") {
            alert("You must be signed in to access this feature");
        }
        else {
            this.router.navigate(["/upload", this.uid]);
        }
    }
};
NavBarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-nav-bar',
        templateUrl: './nav-bar.component.html',
        styleUrls: ['./nav-bar.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [BreakpointObserver, AngularFirestore, AngularFireAuth, Router])
], NavBarComponent);
export { NavBarComponent };
//# sourceMappingURL=nav-bar.component.js.map