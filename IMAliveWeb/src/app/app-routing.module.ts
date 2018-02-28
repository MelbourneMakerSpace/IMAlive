import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SeedDatabaseComponent } from 'app/components/seed-database/seed-database.component';
import { VisitorComponent } from 'app/components/visitor/visitor.component';
import { SupervisorDashboardComponent } from 'app/components/supervisor-dashboard/supervisor-dashboard.component';
import { ActiveChatsComponent } from './components/active-chats/active-chats.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: '',
    component: ActiveChatsComponent,
    outlet: 'ChatTab'
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
    path: 'SupervisorDashboard',
    component: SupervisorDashboardComponent
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
