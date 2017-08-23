import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { Router } from "@angular/router";

@Component({
    selector: "loginComponent",
    templateUrl: "pages/login/login.component.html",
    styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
})
export class LoginComponent {
    constructor(private page: Page, private router: Router) {
    }

    signIn(event: EventData) {
        let login = this.page.getViewById<TextField>("login").text;
        let pass = this.page.getViewById<TextField>("password").text;
        console.log("login:", login, " pass:", pass);
        this.router.navigate(["/chat"]);
    }

}