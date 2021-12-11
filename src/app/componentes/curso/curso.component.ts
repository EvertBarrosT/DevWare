import { Component, OnInit } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  constructor(private navService: NavService, private headerService: HeadersService) { }

  ngOnInit(): void {
    this.navService.navData.cor = [false, false, false, false, false]
    this.headerService.headerData.title = "Curso"
  }

}
