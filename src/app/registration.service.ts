import { Injectable } from '@angular/core';
import {User} from './user'
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private _http : HttpClient) { }

  public userLoginFormRemote(user :User):Observable<any>{
    
    return this._http.post<any>("http://localhost:8080/login",user)

  }
  public userRegisterFormRemote(user :User):Observable<any>{
    return this._http.post<any>("http://localhost:8080/create-user",user)

  }
}
