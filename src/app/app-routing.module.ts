import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { SignupComponent } from './signup/signup.component';
import { ChatFormComponent } from './chat-form/chat-form.component';
import { FriendsListComponent } from './friends-list/friends-list.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'login',component:LoginComponent},
  {path:'registration',component:SignupComponent},
  {path:'chat',component:ChatFormComponent},
  {path:'friend-list',component:FriendsListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
