import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, toArray } from 'rxjs';
import { PopupService } from 'src/app/shared/popup.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.scss']
})
export class ObservablesComponent {

  users: any = []
  address: boolean = false

  POSTS: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 5;
  tableSizes: any = [3, 6, 9, 12];

  onTableDataChange(event: any) {
    this.page = event;
    this.onGetUsers();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.onGetUsers();
  }

  constructor(private apiUrl: UsersService, private popUrl : PopupService, private router : Router) { }

  ngOnInit(): void {
    this.onGetUsers()
    this.popUrl.subscribeMessage$.next(true)
  }

  ngOnDestroy() : void {
    this.popUrl.subscribeMessage$.next(false)
  }

  onGetUsers() {
    this.apiUrl.getAllUsers().pipe(
      map(users => users.map((user: any) => ({
        ...user,
        name: user.name.toUpperCase()
      }))),
      // map(users => users.filter((user:any) => user.id > 5))
    ).subscribe((data) => {
        this.users = data
      }, (error) => {
        console.log("data not displayed")
      })
  }

  showAddress(){
    this.address = !this.address
    this.router.navigate(['5/6'])
  }
}
