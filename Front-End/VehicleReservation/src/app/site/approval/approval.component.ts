import { Component, OnInit,Inject } from '@angular/core';
import { User } from '../user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ApprovalService } from './../../service/approval.service';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {


  users:User[];
  userApproved = false;
  error: String = '';
  size:number=0;
  constructor(private authenticationService: AuthenticationService, private approvalService: ApprovalService) { }


  

  ngOnInit() {
    this.redirecting();
  }

  onApprovalClick(user : User) {
    
    this.approvalService.giveApproval(user).subscribe(() => {
      this.error = '';
      this.redirecting();
    },
      error => {
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];
        }
      });

  }

  onDismissClick(userId : number) {
    
    this.approvalService.giveUnApproval(userId).subscribe(() => {
      this.error = '';
      this.redirecting();
    },
      error => {
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];
        }
      });

  }

  redirecting() {
    this.approvalService.getAllUnapproved().subscribe(user => {
      
      this.users = user;
      console.log("user :"+this.users);
      this.size=this.users.length;
      this.error = '';
    },
      error => {
        this.error = error.error.message;
        if (error.error.errors != null) {
          this.error = error.error.errors[0];
        }
      });
  }

  }

