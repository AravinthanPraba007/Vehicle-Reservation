import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Vehicle } from '../vehicle';
import { AuthService } from 'src/app/service/auth.service';
import { VehicleService } from 'src/app/service/vehicle.service';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/service/booking.service';
import { Booking } from 'src/app/booking/booking';
import { BookingCheckService } from 'src/app/service/booking-check.service';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.css']
})
export class VehicleInfoComponent implements OnInit {

  @Input() vehicle: Vehicle[];
  isAdmin: boolean = true;
  isCustomer: boolean = this.authService.isCustomerUser();
  itemId: number;
  itemAdded = false;
  loggedin : Boolean =false; 
  approved : Boolean=false;
  freshUser:Boolean=true;
  booking:Booking;
  bookingEmpty:boolean=false;
  constructor(private authService: AuthService,private vehicleService: VehicleService, private authenticationService: AuthenticationService, private router: Router,private bookingService: BookingService,private bookingCheckService:BookingCheckService) { }

  
  

  ngOnInit() {
    // this.loggedin=this.authService.loggedIn;
    // this.approved=this.authService.isApproval;

    // this.freshUser=this.authService.freshUser;
    // if(this.freshUser)
    // this.router.navigate(['home']);
    // else
    // {
    //   if(!this.approved)
    //   {
    //     this.authService.authSource = 'approval';
    //     this.router.navigate(['login']);
    //   }
  
    //   if(!this.loggedin)
    //   this.router.navigate(['home']);
    // }
    

    
    
    this.bookingCheckService.getBookingCheck();
    
    this.redirecting();
   
  }

 

  isEditAllowed(): Boolean {
    return this.authService.isAdmin;
  }

  onDeleteVehicle(vehicleId:number) {
    console.log("----delete");
    this.vehicleService.deleteVehicle(vehicleId).subscribe(() => {
      alert("Vehicle details is deleted");
      this.redirecting();
    });
  }

  redirecting() {
    this.vehicleService.getAllVehicle().subscribe(vehicle => {
      
      this.vehicle = vehicle;
      console.log("vehicle :"+this.vehicle);
      console.log(this.vehicle);
   
    });
  }




}


  


