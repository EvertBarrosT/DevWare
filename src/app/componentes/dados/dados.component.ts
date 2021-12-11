import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersService } from '../headers/headers.service';
import { NavService } from '../nav/nav.service';
import { Chart } from 'chart.js'

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent implements OnInit {
  constructor(private navService: NavService, private router: Router, private headerService: HeadersService) {}

  ngOnInit(): void {
    this.navService.navData.cor = [false, false, false, true, false]
    this.headerService.headerData.title = "Dados"
    var myChart = new Chart('myChart', {
      type: 'bar',
      data: {
          labels: ['Front-End', 'Back-End', 'Data Science', 'DevOps', 'UX & Design', 'Mobile', 'Gestão', 'Game Designer'],
          datasets: [{
              label: 'Conteúdo',
              data: [2, 5, 1, 2, 0, 1, 3, 5],
              backgroundColor: [
                  'rgba(18, 180, 202, 0.2)',
                  'rgba(18, 180, 202, 0.2)',
                  'rgba(18, 180, 202, 0.2)',
                  'rgba(18, 180, 202, 0.2)',
                  'rgba(18, 180, 202, 0.2)',
                  'rgba(18, 180, 202, 0.2)',
                  'rgba(18, 180, 202, 0.2)',
                  'rgba(18, 180, 202, 0.2)'
              ],
              borderColor: [
                  'rgba(18, 180, 202, 1)',
                  'rgba(18, 180, 202, 1)',
                  'rgba(18, 180, 202, 1)',
                  'rgba(18, 180, 202, 1)',
                  'rgba(18, 180, 202, 1)',
                  'rgba(18, 180, 202, 1)',
                  'rgba(18, 180, 202, 1)',
                  'rgba(18, 180, 202, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true,
                  }
              }]
          }
      }
    });
  }

  irParaCurso(){
    this.router.navigate(['/curso'])
  }
  
}
