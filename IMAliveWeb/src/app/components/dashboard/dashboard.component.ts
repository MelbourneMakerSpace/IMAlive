import { Component, OnInit } from '@angular/core';
import { LoginService } from "app/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'im-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor(loginService: LoginService, router: Router) {
    if (!loginService.user) { router.navigate(['/Login']) }
  }

  ngOnInit() {
  }

}
