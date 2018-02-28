import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'im-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  myChats = new Array<any>();
  chatStatusList = ['Waiting', 'Chatting', 'Needs Help'];
  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit() {
    // if (!this.loginService.user) { this.router.navigateByUrl("/Login/Dashboard", { skipLocationChange: true }); }
  }

  openChat(event) {
    // console.log("dashboard heard request to open chat:", event);
    // this.myChats.push(event);
  }

}
