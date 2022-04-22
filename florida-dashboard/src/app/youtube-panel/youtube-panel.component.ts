import { Component, OnInit } from '@angular/core';

// Display videos from youtube

@Component({
  selector: 'app-youtube-panel',
  template: `
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/ATORywg69Lg"> </app-youtube-video>
    <app-youtube-video
      videoSrc="https://www.youtube.com/embed/KfoTZllvF6M"> </app-youtube-video>
  `,
  styleUrls: ['./youtube-panel.component.css']
})
export class YoutubePanelComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
