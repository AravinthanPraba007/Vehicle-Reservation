import { Component, OnInit, Input } from '@angular/core';
import { BookingService } from 'src/app/service/booking.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { AuthService } from 'src/app/service/auth.service';
import { Booking } from '../booking';
import { Vehicle } from 'src/app/vehicle/vehicle';
import { Router } from '@angular/router';
import { BookingCheckService } from 'src/app/service/booking-check.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { VehicleInfoComponent } from 'src/app/vehicle/vehicle-info/vehicle-info.component';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  booking: Booking[];
  isAdmin: boolean =this.authService.isAdminUser();
  isCustomer: boolean = this.authService.isCustomerUser();
  isDeleted:boolean = false;
  vehicleBooked: boolean = false;
  newVehicleId: number;
  vehicle: Vehicle[];
  size:number=0;
  present: boolean =false;
  constructor( private router: Router,private bookingService:BookingService,private authService: AuthService,private authenticationService: AuthenticationService,private bookingCheckService:BookingCheckService) { }

  ngOnInit() {
    this.redirecting();
  }

  isNotEmpty(){
    if(this.size==0)
    return false;
    else
    return true;
  }


  redirecting() {
    if (this.isCustomer) {
      this.bookingService.viewBooking(this.authenticationService.getName()).subscribe(booking => { 
        this.booking = booking;
        if(booking)
        {
          this.present=true;
          console.log("data present ");
        }else{
          this.present=false;
          console.log("data not present ");
        }
       
        this.size=this.booking.length;
        console.log("--------------------"+this.size);
      console.log(this.booking);
    });
    }
    else if (this.isAdmin) { 
      this.bookingService.viewAllBooking().subscribe(booking => { 
      this.booking = booking; 
      this.size=this.booking.length;
        console.log("--------------------"+this.size);
      console.log(this.booking);
    });
      
    }
  }


  onCancelBook(bookingId:number,vehicleId:number) 
  {
    console.log("---entering delete");
    this.isDeleted=true;
    this.bookingCheckService.bookingEmpty=true;
    this.bookingService.onCancelBooking(bookingId,vehicleId).subscribe(booking => { 
      alert("Your booking is cancelled");
      this.bookingCheckService.getBookingCheck();
      

    });
  
      this.bookingCheckService.bookingEmpty;
      //this.redirecting();
    this.router.navigate(['booking']);
    
  }

  onPay(booking:Booking){
    console.log("entered the paying");
    this.bookingService.onPaying(booking,this.authenticationService.getName()).subscribe(booking =>{
      alert("Sucessful payment is done");
      this.redirecting();
      //this.router.navigate(['vehicle-list']);
    });
  }

}
