import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component'
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SeedDatabaseComponent } from "app/components/seed-database/seed-database.component";
import { VisitorComponent } from "app/components/visitor/visitor.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'Visitor',
    component: VisitorComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Login/:path',
    component: LoginComponent
  }
  ,
  {
    path: 'Login/:path/:value',
    component: LoginComponent
  }
  ,
  {
    path: 'Dashboard',
    component: DashboardComponent
  }
  ,
  {
    path: 'SeedDatabase',
    component: SeedDatabaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
