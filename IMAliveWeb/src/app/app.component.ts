import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from "rxjs/Observable";
import { LoginService } from "app/services/login.service";

@Component({
  selector: 'IM-root',
  templateUrl: './app.component.html',
  styles: [],
  providers: [LoginService]
})
export class AppComponent implements OnInit {

  user: Observable<firebase.User>;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.onLoginChange.subscribe(user => this.user = user);

  }
}
