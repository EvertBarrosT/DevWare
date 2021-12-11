import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersService } from '../headers/headers.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private headerService: HeadersService, private navService: NavService, private router: Router) { 
    
  }

  ngOnInit(): void {
    this.headerService.headerData.title = "Home"
    this.navService.navData.cor = [true, false, false, false, false]
  }

  irParaCurso(){
    this.router.navigate(['/curso'])
  }

}
