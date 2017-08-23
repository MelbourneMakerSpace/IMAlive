import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./pages/login/login.component";

import { NativeScriptRouterModule } from "nativescript-angular/router";
import { routes, navigatableComponents } from "./app.routing";

@NgModule({
  imports: [NativeScriptModule, NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)],
  declarations: [AppComponent, LoginComponent, ...navigatableComponents],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA],
  providers: []
})
export class AppModule { }
