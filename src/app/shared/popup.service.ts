import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  subscribeMessage$ = new Subject<boolean>()

  constructor() { }
}
