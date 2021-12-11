import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeadersService } from '../headers/headers.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-podcasts',
  templateUrl: './podcasts.component.html',
  styleUrls: ['./podcasts.component.css']
})
export class PodcastsComponent implements OnInit {

  constructor(private navService: NavService, private router: Router, private headerService: HeadersService) { }


  ngOnInit(): void {
    this.navService.navData.cor = [false, false, false, false, true]
    this.headerService.headerData.title = "Podcast"
  }

  irParaPodcast(){
    this.router.navigate(['/playPodcast'])
  }
}
