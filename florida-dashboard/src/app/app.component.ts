import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
	<!-- This anchor is just a reference to the top of the page -->
    <a id = 'home'></a>
	<app-title-box></app-title-box>
	
	<div class="containercontainer">
	
	<div class="navbarorder">
    <!-- Navigation bar to stay at top of screen -->
    <app-navigation-bar></app-navigation-bar>
	</div>

	<div class="container">
    
	<div class="title">
	<p></p>
	</div>
	
	<div class="text">
    <p>
      Red tide, a harmful algae bloom that regularly occurs on the coasts of Florida, creates toxic
      conditions that negatively impact the environment, marine animals, and human health. It can ruin
      beach days and endanger animals that call the Florida coasts their home. This dashboard is a collection
      of updated information to help you stay up-to-date on the current status of red tide in Florida.
    </p>
	</div>

	<a id = 'twitter'></a>
    <!-- Put twitter content right under this anchor -->
    <app-bar-graph></app-bar-graph>
	<app-tweet-list></app-tweet-list>

    <!-- Put spotify content right under this anchor -->
	<a id = 'spotify'></a>
	<app-spotify-container></app-spotify-container>
	<app-sensordata></app-sensordata>
	
	<!-- Put youtube content right under this anchor -->
	<a id = 'youtube'></a>
    <app-youtube-panel></app-youtube-panel>

	<app-chatboard></app-chatboard>
	
	</div>

	</div>



  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'florida-dashboard';
  getValues(text: string, location:string , item:string ){
	console.log(text)
	}
}
