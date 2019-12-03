import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Booking } from '../booking';
import { BookingService } from 'src/app/service/booking.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  editForm: FormGroup;
  vehicleBooked: boolean = false;
  newVehicleId: number;
  bookingStart:Date;
  bookingEnd:Date;
  booking:Booking;
  userName:string;
  constructor(private route: ActivatedRoute, private bookingService: BookingService,private authenticationService: AuthenticationService) { }

  ngOnInit() {
    const vehicleId = +(this.route.snapshot.paramMap.get('id'));
    this.newVehicleId = vehicleId;
    this.editForm = new FormGroup({
      'id': new FormControl(this.newVehicleId),
      'bookingStart': new FormControl('', Validators.required),
      'bookingEnd': new FormControl('',Validators.required)
    });
  
  }


  isVehicleBooked() {
    if(this.vehicleBooked)
    return true;
    else
    return false;
  }

  addBooking() {
    console.log("entered form");

    // this.booking.bookingStart = new Date('2017-12-22');
    // this.booking.bookingEnd = new Date('2017-12-22');
    // this.booking.paid = false;
    let dates :Booking={
      bookingStart:this.editForm.value.bookingStart,
      bookingEnd:this.editForm.value.bookingEnd,
      paid :false
    };
    console.log(dates);
    console.log("---booking details-----");
    this.userName=this.authenticationService.getName();
    this.bookingService.addBooking(this.userName,this.newVehicleId,dates).subscribe(
      data =>{
        alert('booked Successs');
      }
    );
  //  this.vehicleService.ModifyVehicle(this.vehicle).subscribe();
    this.vehicleBooked = true;
  }

}
