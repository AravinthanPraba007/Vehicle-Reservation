import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Booking } from '../booking/booking';

@Injectable({
  providedIn: 'root'
})

export class BookingService {

  cartEmpty:boolean;
  
  onCancelBooking(bookingId:number,vehicleId:number) {
    console.log("entering Cancel ");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };

    return this.httpClient.delete<void>(this.baseUrl + "/booking/"+bookingId+"/"+vehicleId, httpOptions);
  }

  private baseUrl = environment.baseUrl;

  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient) { }


  viewBooking(userName: string): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    console.log(httpOptions);
    return this.httpClient.get(this.baseUrl + "/booking/" + userName, httpOptions);
  }


  viewAllBooking(): Observable<any> {
    console.log("entering view all ");
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl + "/booking" , httpOptions);
  }

  addBooking(userName:string, vehicleId: number, booking: Booking): Observable<any> {
    console.log("entering add booking"+vehicleId+" "+userName);
    console.log(this.authenticationService.getToken());
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.post<void>(this.baseUrl + "/booking/"+userName+"/"+vehicleId, booking, httpOptions);
  }

  onPaying(booking: Booking,userName:string): Observable<any> {
    console.log("entering pay booking"+userName);
    console.log(this.authenticationService.getToken());
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    console.log(httpOptions);
    return this.httpClient.put<void>(this.baseUrl + "/booking/"+userName,booking, httpOptions);
  }

}
