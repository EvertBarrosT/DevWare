import { Component, OnInit } from '@angular/core';
import { HeadersService } from '../headers/headers.service';
import { NavService } from '../nav/nav.service';

@Component({
  selector: 'app-play-podcasts',
  templateUrl: './play-podcasts.component.html',
  styleUrls: ['./play-podcasts.component.css']
})
export class PlayPodcastsComponent implements OnInit {

  constructor(private navService: NavService, private headerService: HeadersService) { }

  ngOnInit(): void {
    this.navService.navData.cor = [false, false, false, false, true]
    this.headerService.headerData.title = "Podcast"
  }

}
