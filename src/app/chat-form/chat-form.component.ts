import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-form',
  templateUrl: './chat-form.component.html',
  styleUrls: ['./chat-form.component.css']
})
export class ChatFormComponent {
openModal(){
const myModalDiv = document.getElementById('myModal')
if(myModalDiv !=null){
myModalDiv.style.display="block";
}
}
closeModal(){
  const myModalDiv = document.getElementById('myModal')
  if(myModalDiv !=null){
  myModalDiv.style.display="none";
  }
  }
  

}
