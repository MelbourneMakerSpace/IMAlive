import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/rx'
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {
  public onLoginChange: EventEmitter<firebase.User> = new EventEmitter();
  public user: firebase.User;  //so other components can get the user info

  constructor() {
    this.onLoginChange.subscribe(user => this.user = user);
  }

}
