import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import {User} from '../user';

import { RegistrationService } from '../registration.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 user = new User();
  msg= null;
constructor(private _service : RegistrationService, private _router :Router){}
ngOnInit(): void { 
  
}

  loginUser(){
    this._service.userLoginFormRemote(this.user).subscribe(
      data=>{console.log("response received");
    this._router.navigate(["/chat"]);
    
    },
     error=>{
      console.log("Exception occured");
      this.msg = error.error;
     }
    )
  }
}

