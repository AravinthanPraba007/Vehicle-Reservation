import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Observable } from 'rxjs';
import { Vehicle } from '../vehicle/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  vehicleInEdit: boolean = false;
  private baseUrl = environment.baseUrl;
  constructor(private httpClient: HttpClient, private authenticationService: AuthenticationService) { }

  public getAllVehicle(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    console.log(httpOptions);
    return this.httpClient.get(this.baseUrl + "/vehicle", httpOptions);
  }




  public getVehicle(vehicleId: number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    console.log(httpOptions);
    return this.httpClient.get(this.baseUrl + "/vehicle/" + vehicleId, httpOptions);
  }

  public deleteVehicle(vehicleId: number): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    console.log(headers);
    return this.httpClient.delete(this.baseUrl + "/vehicle/" + vehicleId, {headers});
    // return this.httpClient.get(this.baseUrl + "/vehicle/" + vehicleId, httpOptions);
  }
  // deleteVeh(){
  //   let headers = new HttpHeaders();
  //   headers = headers.set('Authorization', 'Basic ' + this.authenticationService.getToken());
  //   console.log(headers);
  //   }

  public ModifyVehicle(vehicle: Vehicle): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.put<void>(this.baseUrl + "/vehicle", vehicle, httpOptions);
  }

  public addVehicle(vehicle: Vehicle): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.post<void>(this.baseUrl + "/vehicle", vehicle, httpOptions);
  }

  


}
