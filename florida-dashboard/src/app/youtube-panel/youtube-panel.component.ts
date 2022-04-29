import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';

// Display videos from youtube

@Component({
  selector: 'app-youtube-panel',
  template: `
  <div class="youtube">
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/{{awarenessVideoId}}"> </app-youtube-video>
	  </div>
	<div class="youtube-right">
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/{{symptomVideoId}}"> </app-youtube-video>
	</div>
  `,
  styleUrls: ['./youtube-panel.component.css']
})
export class YoutubePanelComponent implements OnInit {

  symptomVideoId: string = "";
  awarenessVideoId: string = "";

  constructor(private database: DatabaseApiService) { }

  ngOnInit(): void {

    // Get recent symptom video
    this.database.getRecentYoutubeVideo("symptoms")
    .then( (response) => response.json())
    .then( (data) => {
      this.symptomVideoId = data['videoId']
    })

    // Get recent awareness video
    this.database.getRecentYoutubeVideo("awareness")
    .then( (response) => response.json())
    .then( (data) => {
      this.awarenessVideoId = data['videoId']
    })
  }

}
