import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.httpClient.get(this.apiUrl)
  }
}
