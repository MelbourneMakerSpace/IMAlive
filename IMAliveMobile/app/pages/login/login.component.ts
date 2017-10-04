import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/rx';
import firebase = require("nativescript-plugin-firebase");
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/share';
import { BackendService } from "../../services/backend.service";
var validator = require('email-validator');
import * as SocialShare from 'nativescript-social-share';

@Component({
    selector: "loginComponent",
    templateUrl: "pages/login/login.component.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {
    isLoading: boolean = false;

    constructor(private page: Page, private router: Router) {
    }

    login(userName: string, password: string) {
        return firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: userName,
                password: password
            }
        }).then((result: any) => {
            BackendService.token = result.uid;
            console.log("results:", JSON.stringify(result));
            return JSON.stringify(result.uid);
        }, (errorMessage: any) => {
            alert(errorMessage);
        });
    }

    logout() {
        BackendService.token = "";
        firebase.logout();
    }

    share() {
        SocialShare.shareText("Check out the IMAlive Mobile App!");
    }

    signIn(event: EventData) {

        this.isLoading = true;
        let login = this.page.getViewById<TextField>("login").text;
        let pass = this.page.getViewById<TextField>("password").text;
        console.log("login:", login, " pass:", pass);

        if (!validator.validate(login)) {
            alert('Please enter a valid e-mail address in the login box');
            return;
        }

        this.login(login, pass).then(x => {
            if (x != undefined) {
                this.router.navigate(["/chat"]);
            }
        });
        this.isLoading = false;
    }

}