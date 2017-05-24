import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'Login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }