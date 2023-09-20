import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { User } from '../user';
import { RegistrationService } from '../registration.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{


   user = new User();
   msg ='';
  constructor(private _service : RegistrationService, private _router :Router){}
  ngOnInit(): void {

   
 }
 registerUser(){
  this._service.userRegisterFormRemote(this.user).subscribe(
    data=>{console.log("Registration success");
  this._router.navigate(["/login"]);
  
  },
   error=>{console.log("Exception occured");
    this.msg = "couldn't sign up";
   }
  )

  }
}

