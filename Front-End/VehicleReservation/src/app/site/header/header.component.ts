import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {


  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private authService: AuthService) { }

    isAuthenticated() {
      return this.authService.loggedIn;
    }

    getUserName() {
      return this.authenticationService.getName();
    }

    isAdmin() {
      // this.movieInEdit = this.movieService.movieInEdit;
      return this.authService.isAdmin;
    }
  
    isCustomer() {
      return this.authService.isCustomer;
    }
  
    onSignOut() {
      this.authService.logOut();
      this.router.navigate([this.authService.redirectUrlLogin]);
    }

 

}
