import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersService } from '../headers/headers.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {

  constructor(private navService: NavService, private router: Router, private headerService: HeadersService) { }

  ngOnInit(): void {
    this.navService.navData.cor = [false, false, true, false, false]
    this.headerService.headerData.title = "Downloads"
  }

  irParaCurso(){
    this.router.navigate(['/curso'])
  }

}
