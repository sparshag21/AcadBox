import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
let AuthService = class AuthService {
    constructor(afAuth, afs, router) {
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        this.usersCollection = afs.collection("users");
    }
    register(email, password, name, username, roll) {
        this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then((user) => {
            this.new_user = {
                name: name,
                username: username,
                roll: roll,
                courses: [],
                email: user.user.email,
                uid: user.user.uid
            };
            this.makeUser();
        })
            .catch((error) => {
            alert(error.message);
        });
    }
    makeUser() {
        const id = this.new_user.uid;
        this.usersCollection.doc(id).set(this.new_user);
        this.router.navigate(["/dashboard"]);
    }
};
AuthService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [AngularFireAuth, AngularFirestore, Router])
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map