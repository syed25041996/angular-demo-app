import { Component } from '@angular/core';
import { PopupService } from 'src/app/shared/popup.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  subscribed: boolean = false

  constructor(private popUrl : PopupService){}

  ngOnInit() : void{
    this.popUrl.subscribeMessage$.subscribe((data) => {
      this.subscribed = data
    })
  }


}
