import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersService } from '../headers/headers.service';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private navService: NavService) { 
    
  }

  ngOnInit(): void {
  }

  navergar(url: string){
    this.router.navigate([`/${url}`])
  }

  get cor(): boolean[]{
    return this.navService.navData.cor
  }
}
