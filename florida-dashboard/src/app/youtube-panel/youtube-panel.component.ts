import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';

// Display videos from youtube

@Component({
  selector: 'app-youtube-panel',
  template: `
  <div class="youtube">
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/{{trendingVideoId}}"> </app-youtube-video>
	  <!-- </div> -->
	<!-- <div class="youtube-right"> -->
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/{{symptomVideoId}}"> </app-youtube-video>
	<!-- </div> -->

  <!-- <div class="youtube-right"> -->
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/{{informationVideoId}}"> </app-youtube-video>
	</div>
  `,
  styleUrls: ['./youtube-panel.component.css']
})
export class YoutubePanelComponent implements OnInit {

  symptomVideoId: string = "";
  trendingVideoId: string = "";
  informationVideoId: string = "";

  constructor(private database: DatabaseApiService) { }

  ngOnInit(): void {

    // Get recent symptom video
    this.database.getRecentYoutubeVideo("symptoms")
    .then( (response) => response.json())
    .then( (data) => {
      this.symptomVideoId = data['videoId']
    })

    // Get recent trending video
    this.database.getRecentYoutubeVideo("trending")
    .then( (response) => response.json())
    .then( (data) => {
      this.trendingVideoId = data['videoId']
    })

    // Get recent informational video
    this.database.getRecentYoutubeVideo("information")
    .then( (response) => response.json())
    .then( (data) => {
      this.informationVideoId = data['videoId']
    })
  }

}
