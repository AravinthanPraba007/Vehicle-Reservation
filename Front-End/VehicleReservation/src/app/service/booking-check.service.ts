import { Injectable } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from '../booking/booking';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class BookingCheckService {
  bookingEmpty:boolean=false;
  booking:Booking;

  constructor(private bookingService:BookingService,private authenticationService: AuthenticationService) { }
  getBookingCheck(){
    this.bookingService.viewBooking(this.authenticationService.getName()).subscribe(data=>{
      this.booking=data;
      console.log(data)
      if(this.booking == null){
        this.bookingEmpty=true;
      }
      else{
        this.bookingEmpty=false;
      }
      
    });
  }
}
