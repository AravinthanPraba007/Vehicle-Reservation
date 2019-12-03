import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './authentication.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { User } from '../site/user';

@Injectable({
  providedIn: 'root'
})
export class ApprovalService {


  private baseUrl = environment.baseUrl;


  constructor(private authenticationService: AuthenticationService, private httpClient: HttpClient) { }

  getAllUnapproved() :Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };
    return this.httpClient.get(this.baseUrl+"/users/approval",httpOptions);
  }

  giveApproval(user: User) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };

    return this.httpClient.put<void>(this.baseUrl + "/users/approval",user, httpOptions);

  }

  giveUnApproval(userId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.authenticationService.getToken()
      })
    };

    return this.httpClient.delete<void>(this.baseUrl + "/users/approval/"+userId, httpOptions);

  }

}
