import { Component, OnInit, ViewChild, ElementRef, Renderer, Output } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl } from '@angular/forms'
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/rx'
import * as firebase from 'firebase/app';
import { LoginService } from "app/services/login.service";

@Component({
  selector: 'im-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  badLogin: boolean = false;
  user: Observable<firebase.User>;
  testingLogin: boolean = false;

  login: string;
  password: string;
  @ViewChild('txtLogin') txtLogin: ElementRef;

  constructor(private db: AngularFireAuth, private router: Router, private renderer: Renderer, private loginService: LoginService) {
  }

  ngOnInit() {
    this.user = this.db.authState;
    this.renderer.invokeElementMethod(this.txtLogin.nativeElement, 'focus');
  }

  tryLogin() {
    //console.log(l, ' - ', p);
    this.testingLogin = true;
    this.db.auth.signInWithEmailAndPassword(this.login, this.password).then((x) => {
      console.log(x);
      localStorage.setItem("creds", JSON.stringify(x));
      this.loginService.onLoginChange.emit(x);
      this.router.navigate(['/Dashboard']);
    }
    ).catch((error) => {
      this.badLogin = true;
      console.log(error);
    }).then(x => this.testingLogin = false);
  }

}
