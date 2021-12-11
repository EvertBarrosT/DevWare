import { Component, OnInit } from '@angular/core';
import { HeadersService } from './headers.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.css']
})
export class HeadersComponent implements OnInit {

  constructor(private headerService: HeadersService, private location: Location) { }

  ngOnInit(): void {
  }

  backClicked(){
    this.location.back();
  }

  get title(): string {
    return this.headerService.headerData.title
  }
}
