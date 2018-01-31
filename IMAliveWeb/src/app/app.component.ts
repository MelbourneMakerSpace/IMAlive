import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { LoginService } from "app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'IM-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [LoginService]
})
export class AppComponent implements OnInit {

  user: firebase.User;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.user$.subscribe((user) => this.user = user);
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/Login']);
  }
} 
