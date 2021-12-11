import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NavData } from './nav-data.model';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  private _navData = new BehaviorSubject<NavData>({
    cor: [true, false, false, false, false]
  })

  constructor() { }

  get navData(): NavData {
    return this._navData.value
  }

  set navData(navData: NavData){
    this._navData.next(navData)
  }
}
