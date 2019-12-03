import { Injectable } from '@angular/core';
import { User } from '../site/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  freshUser= true;
  loggedIn = false;
  isAdmin = false;
  isCustomer = false;
  isApproval =false;
  user: User;
  redirectUrl = '/movie-list';
  redirectUrlLogin = '/login';
  authSource: string = null; /*used to check if add to favorites is done before login*/
  userAuthenticated: User;

  constructor(private authenticationService: AuthenticationService) { }

  logIn(): Boolean {
    if (this.authenticationService.getRole() == "ADMIN") {
      this.freshUser=false;
      if(this.authenticationService.getApproval()=="true")
      {
        this.isApproval=true;
        console.log("approval 1--"+this.isApproval);
      }
      this.loggedIn = true;
      this.userAuthenticated = this.user;
      this.isAdmin = true;
      this.isCustomer = false;
      return true;
      
    }
    else if (this.authenticationService.getRole() == "USER") {
      this.freshUser=false;
      console.log("approval 2--"+this.isApproval);
      if(this.authenticationService.getApproval()=="true")
      {
        this.isApproval=true;
        console.log("approval --"+this.isApproval);
      }
      this.loggedIn = true;
      this.userAuthenticated = this.user;
      this.isCustomer = true;
      this.isAdmin = false;
      return true;
     
    }
    else {
      this.isApproval=false;
      this.loggedIn = false;
      this.isCustomer = false;
      this.isAdmin = false;
    }

  }

  logOut() {
    this.freshUser=true;
    this.isApproval=false;
    this.loggedIn = false;
    this.isCustomer = false;
    this.isAdmin = false;
    this.authSource=null;
    this.authenticationService.setRole(null);
    this.authenticationService.setToken(null);
    this.authenticationService.setApproval(null);
  }

  isAdminUser() {
    return this.isAdmin;
  }

  isCustomerUser() {
    return this.isCustomer;
  }


}
