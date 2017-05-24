import { Component, OnInit, ViewChild, ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'im-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  badLogin: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  tryLogin(l, p) {
    //console.log(l, ' - ', p);
    if (l == 'tony' && p == 'chicken4') {
      this.badLogin = false;
    }
    else {
      this.badLogin = true;
    }
  }

}
