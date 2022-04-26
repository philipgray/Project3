import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <app-test-box></app-test-box>
  <a id = 'home'></a>
	<div class="containercontainer">

	<div class="navbarorder">
    <!-- Navigation bar to stay at top of screen -->
    <app-navigation-bar></app-navigation-bar>
	</div>

	<div class="container">
    <!-- This anchor is just a reference to the top of the page -->

	<div class="title">
	<p>Red Tide</p>
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
	<a id = 'spotify'></a>
	<div>
    <!-- Put twitter content right under this anchor -->

	<div>
	<div class="float-child">
    <app-bar-graph></app-bar-graph>

	<!-- Spotify Here Temporarily -->
	<div class="spotify">
	<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/73Bxsi1UB4V8d9u4sDLu3O?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
	</div>
	</div>

	<div class="float-child-right">
    <app-tweet-list></app-tweet-list>

	</div>

	</div>

    <!-- Put youtube content right under this anchor -->
    <a id = 'youtube'></a>

	</div>
	<div>
    <app-youtube-panel></app-youtube-panel>
	</div>

    <!-- Put spotify content right under this anchor -->

	</div>

	</div>



  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'florida-dashboard';
}
