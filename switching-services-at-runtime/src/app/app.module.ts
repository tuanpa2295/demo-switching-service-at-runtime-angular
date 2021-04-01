import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BusinessEmployerService} from "../services/implementations/business-employer.service";
import {BusinessEmployeeService} from "../services/implementations/business-employee.service";
import {SwitchingService} from "../services/implementations/switching.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ BusinessEmployerService, BusinessEmployeeService, SwitchingService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
