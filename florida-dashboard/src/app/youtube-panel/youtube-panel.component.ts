import { Component, OnInit } from '@angular/core';

// Display videos from youtube

@Component({
  selector: 'app-youtube-panel',
  template: `
  <div class="youtube">
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/ATORywg69Lg"> </app-youtube-video>
	  </div>
	<div class="youtube-right">
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/KfoTZllvF6M"> </app-youtube-video>
	</div>
	<div class="youtube-right">
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/KfoTZllvF6M"> </app-youtube-video>
	</div>
  `,
  styleUrls: ['./youtube-panel.component.css']
})
export class YoutubePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
