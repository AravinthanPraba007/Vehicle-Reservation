import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './site/login/login.component';
import { VehicleComponent } from './vehicle/vehicle/vehicle.component';
import { VehicleInfoComponent } from './vehicle/vehicle-info/vehicle-info.component';
import { ApprovalComponent } from './site/approval/approval.component';
import { VehicleEditComponent } from './vehicle/vehicle-edit/vehicle-edit.component';
import { BookingComponent } from './booking/booking/booking.component';
import { BookingFormComponent } from './booking/booking-form/booking-form.component';
import { VehicleSearchComponent } from './vehicle/vehicle-search/vehicle-search.component';

const routes: Routes = [

  {
    path: "vehicle-list", component: VehicleSearchComponent
  },

  {
    path: "signup", component: SignupComponent
  },
  {
    path: "login", component: LoginComponent
  },

  {
    path: "home", component: VehicleComponent
  },

  {
    path: '', redirectTo: 'vehicle-list', pathMatch: 'full'
  },

  {
    path: "vehicle-edit", component: VehicleEditComponent
  },
  {
    path: 'vehicle-edit/:id', component: VehicleEditComponent
  },

  {
    path: "booking", component: BookingComponent
  },

  {
    path: "bookingform/:id", component: BookingFormComponent
  },

  // {
  //   path: "search", component: VehicleSearchComponent
  // },

  {
    path: "approval", component: ApprovalComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
