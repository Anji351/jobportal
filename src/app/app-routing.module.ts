import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploginComponent } from './app/auth/login/emplogin/emplogin.component';
import { LoginComponent } from './app/auth/login/login.component';
import { RecurloginComponent } from './app/auth/login/recurlogin/recurlogin.component';

const routes: Routes = [
  {path:"",redirectTo:"login/emp_login",pathMatch:"full"},
  {path:"login",component:LoginComponent, children:[
    {path:"emp_login",component:EmploginComponent},
    {path:"recr_login",component:RecurloginComponent},
]},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
