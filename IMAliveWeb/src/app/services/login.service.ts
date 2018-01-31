import { Injectable, EventEmitter } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable, Subject } from 'rxjs/rx'
import * as firebase from 'firebase/app';

@Injectable()
export class LoginService {

  public user$ = this.fireAuth.authState;

  constructor(private fireAuth: AngularFireAuth) {
  }

  login(email: string, password: string): Observable<any> {
    return this.fromFireBaseAuthPromise(this.fireAuth.auth.signInWithEmailAndPassword(email, password));
  }

  logout() {
    this.fireAuth.auth.signOut();
  }

  fromFireBaseAuthPromise(promise: Promise<any>): Observable<any> {
    const subject = new Subject<any>();

    promise.then(res => {
      subject.next(res);
      subject.complete();
    }, err => {
      subject.error(err);
      subject.complete();
    });

    return subject.asObservable();
  }

}
