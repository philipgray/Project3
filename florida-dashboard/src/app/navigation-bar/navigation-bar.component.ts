import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  template: `
  <div>
    <div class="buttons">
      <!-- Buttons to navigate the page -->
      <app-navigation-button
        hrefId = '#home'
        imagePath = 'assets/home_icon.png'
        altText = 'Top of Page'>
      </app-navigation-button>

      <app-navigation-button
        hrefId = '#twitter'
        imagePath = 'assets/twitter_icon.png'
        altText = 'Twitter Data'></app-navigation-button>

      <app-navigation-button
        hrefId='#youtube'
        imagePath = 'assets/youtube_icon.png'
        altText = 'Informational Videos'></app-navigation-button>

      <app-navigation-button
        hrefId='#spotify'
        imagePath = 'assets/spotify_icon.png'
        altText = 'Spotify Podcasts'></app-navigation-button>
		
    </div>
	
	</div>
	
  `,
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
