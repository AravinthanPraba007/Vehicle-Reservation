import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/service/vehicle.service';
import { Vehicle } from '../vehicle';
import { BookingService } from 'src/app/service/booking.service';
import { Router } from '@angular/router';
import { BookingCheckService } from 'src/app/service/booking-check.service';
import { AuthService } from 'src/app/service/auth.service';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-vehicle-search',
  templateUrl: './vehicle-search.component.html',
  styleUrls: ['./vehicle-search.component.css']
})
export class VehicleSearchComponent implements OnInit {

  vehicleSearch: Vehicle[];
  searchKey: string;

  isAdmin: boolean = true;
  isCustomer: boolean = this.authService.isCustomerUser();
  itemId: number;
  itemAdded = false;
  loggedin : Boolean =false; 
  approved : Boolean=false;
  freshUser:Boolean=true;
  bookingEmpty:boolean=false;

  constructor(private authService: AuthService,private vehicleService: VehicleService, private authenticationService: AuthenticationService, private router: Router,private bookingService: BookingService,private bookingCheckService:BookingCheckService) { }

  ngOnInit() {
    this.loggedin=this.authService.loggedIn;
    this.approved=this.authService.isApproval;

    this.freshUser=this.authService.freshUser;
    if(this.freshUser)
    this.router.navigate(['home']);
    else
    {
      if(!this.approved)
      {
        this.authService.authSource = 'approval';
        this.router.navigate(['login']);
      }
  
      if(!this.loggedin)
      this.router.navigate(['home']);
    }
    
  }

  searchVehicle() {
    this.vehicleService.getAllVehicle().subscribe(vehicle => {
      
      this.vehicleSearch = vehicle;
      this.vehicleSearch = this.vehicleSearch.filter(vehicleFilter => vehicleFilter.name.toLowerCase().indexOf(this.searchKey.toLowerCase()) !== -1);
    });
  }

}
