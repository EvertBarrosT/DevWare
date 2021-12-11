import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersService } from '../headers/headers.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-novidades',
  templateUrl: './novidades.component.html',
  styleUrls: ['./novidades.component.css']
})
export class NovidadesComponent implements OnInit {

  constructor(private navService: NavService, private router: Router, private headerService: HeadersService) { }

  ngOnInit(): void {
    this.navService.navData.cor = [false, true, false, false, false]
    this.headerService.headerData.title = "Novidade"
  }

  irParaPodcast(){
    this.router.navigate(['/playPodcast'])
  }

  irParaCurso(){
    this.router.navigate(['/curso'])
  }
}
