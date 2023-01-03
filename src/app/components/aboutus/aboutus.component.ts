import { Component } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent {

  

  employees  = [
    {id: 1 , name : "Raj", age: 26},
    {id: 2 , name : "Bob", age: 27},
    {id: 3 , name : "Kane", age: 28}
  ]

  color = "Red";
  state = false

  onClick(color : any){
    alert(color)
  }


}
