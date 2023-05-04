import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './app/auth/login/login.component';
import { EmploginComponent } from './app/auth/login/emplogin/emplogin.component';
import { RecurloginComponent } from './app/auth/login/recurlogin/recurlogin.component';
import { RegisterComponent } from './app/auth/register/register.component';
import { EmpregisterComponent } from './app/auth/register/empregister/empregister.component';
import { RecruregisterComponent } from './app/auth/register/recruregister/recruregister.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmploginComponent,
    RecurloginComponent,
    RegisterComponent,
    EmpregisterComponent,
    RecruregisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
