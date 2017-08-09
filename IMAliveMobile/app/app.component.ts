import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html"
})
export class AppComponent {
  constructor(private page: Page) {
  }

  signIn(event: EventData) {
    let login = this.page.getViewById<TextField>("login").text;
    let pass = this.page.getViewById<TextField>("password").text;
    console.log("login:", login, " pass:", pass);
  }

}