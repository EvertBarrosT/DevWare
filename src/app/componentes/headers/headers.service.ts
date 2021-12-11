import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './headers-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {
    private _headerData = new BehaviorSubject<HeaderData>({
      title: 'Home'
    })
  constructor() { }

  get headerData(): HeaderData {
    return this._headerData.value
  }

  set headerData(headerData: HeaderData){
    this._headerData.next(headerData)
  }
}
