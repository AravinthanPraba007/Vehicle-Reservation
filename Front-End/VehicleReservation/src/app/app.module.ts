import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './site/header/header.component';
import { LoginComponent } from './site/login/login.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { VehicleInfoComponent } from './vehicle/vehicle-info/vehicle-info.component';
import { ApprovalComponent } from './site/approval/approval.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';

import {MatNativeDateModule} from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BookingComponent } from './booking/booking/booking.component';
import { BookingFormComponent } from './booking/booking-form/booking-form.component';
import {DatePipe} from '@angular/common';
import { VehicleSearchComponent } from './vehicle/vehicle-search/vehicle-search.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    VehicleComponent,
    VehicleInfoComponent,
    ApprovalComponent,
    VehicleEditComponent,
    BookingComponent,
    BookingFormComponent,
    VehicleSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [DatePipe ],
  bootstrap: [AppComponent]
})
export class AppModule { }
