import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';

// Display videos from youtube

@Component({
  selector: 'app-youtube-panel',
  template: `

  <div class="youtube">
    <div class="title"><p>Youtube Videos:<p></div>
    <div class='youtube-box'>
    <app-youtube-video
        class='item'
        videoSrc="https://www.youtube.com/embed/{{trendingVideoId}}"
        videoDescription="Trending Red Tide Video (unverified source)"> </app-youtube-video>
      <app-youtube-video
        class='item'
        videoSrc="https://www.youtube.com/embed/{{symptomVideoId}}"
        videoDescription="Health Symptom Video (from Sarasota Memorial)"> </app-youtube-video>
      <app-youtube-video
        class='item'
        videoSrc="https://www.youtube.com/embed/{{informationVideoId}}"
        videoDescription="Informational Video (from Mote Marine Lab)"> </app-youtube-video>
    </div>
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
