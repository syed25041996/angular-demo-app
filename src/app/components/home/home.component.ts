import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  fullName: string = "Syed"
  checkName: boolean = true
  car = ''

  onKeyDown(value: any) {
    console.log(value.key)
    // prompt()?.toLocaleLowerCase()
  }
}
