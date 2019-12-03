import { Component, OnInit } from '@angular/core';
import { User } from '../site/user';
import { UserService } from '../service/user.service';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    gender: "null",
    role: "Customer",
    number: "",
    age:null,
    email:"",
    branch:""
  };

  error: string = '';
  passwordMismatch = false;

  constructor(private userService: UserService, private authService: AuthService, private router: Router) { }

  signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      'username': new FormControl(this.user.username, [Validators.required, Validators.maxLength(20)]),
      'firstname': new FormControl(this.user.firstName, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30)]),
      'lastname': new FormControl(this.user.lastName, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.maxLength(30)]),
      'password': new FormControl(this.user.password, [Validators.required,Validators.maxLength(13),Validators.minLength(2)]),
      'confirmPassword': new FormControl(null, [Validators.required]),
      'gender':new FormControl(this.user.gender, [Validators.required]),
      'number':new FormControl(this.user.number,  [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(10)]),
      'age':new FormControl(this.user.age, [Validators.required,Validators.pattern('^[0-9]+$'),Validators.minLength(1)]),
      'email': new FormControl(null, [Validators.required]),
      'branch': new FormControl(null, [Validators.required]),
    });
  }
  onSubmitSignUp() {
    if (this.signupForm.value.password == this.signupForm.value.confirmPassword) {
      this.user.firstName = this.signupForm.value.firstname;
      this.user.lastName = this.signupForm.value.lastname;
      this.user.password = this.signupForm.value.password;
      this.user.username = this.signupForm.value.username;
      this.user.role = "Customer";
      this.user.gender=this.signupForm.value.gender;
      this.user.age=this.signupForm.value.age;
      this.user.number=this.signupForm.value.number;
      this.user.email=this.signupForm.value.email;
      this.user.branch=this.signupForm.value.branch;

      this.userService.addUserCustomer(this.user).subscribe(() => {
        this.passwordMismatch = false;
        this.router.navigate([this.authService.redirectUrlLogin]);
      }, error => {
        this.error = error.error.message;
        /*for global exception handler*/
        if (error.error.errors != null) {
          this.error = error.error.errors;
        }
      });
    }
    else {
      this.passwordMismatch = true;
    }
  }
}
