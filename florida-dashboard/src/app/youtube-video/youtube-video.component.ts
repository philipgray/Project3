import { Component, Input, OnInit } from '@angular/core';


// Display a single youtube video

@Component({
  selector: 'app-youtube-video',
  template: `
  <div class="youtube">
    <!-- iframe with the youtube video -->
    <iframe width="300" height="237"
      [src]='this.videoSrc | safe'
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
	</div>
  `,
  styleUrls: ['./youtube-video.component.css']
})
export class YoutubeVideoComponent implements OnInit {

  @Input() videoSrc = "";

  constructor() { }

  ngOnInit(): void {
  }

}
