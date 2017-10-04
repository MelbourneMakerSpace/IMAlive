import { Component } from "@angular/core";
import { EventData } from "tns-core-modules/data/observable/observable";
import { TextField } from "ui/text-field";
import { Page } from "ui/page";
import { LoginComponent } from "./pages/login/login.component"

@Component({
  selector: "my-app",
  template: `
  <Page class="page" xmlns="http://schemas.nativescript.org/tns.xsd">
  <Page.actionBar>
  <ActionBar title="IMAlive Mobile" icon="" class="action-bar">
  </ActionBar>  
  </Page.actionBar>
  <page-router-outlet></page-router-outlet>
  </Page>
  `
})
export class AppComponent {
  constructor(private page: Page) {
  }

  // signIn(event: EventData) {
  //   let login = this.page.getViewById<TextField>("login").text;
  //   let pass = this.page.getViewById<TextField>("password").text;
  //   console.log("login:", login, " pass:", pass);
  // }

}