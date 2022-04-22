import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <!-- Navigation bar to stay at top of screen -->
    <app-navigation-bar></app-navigation-bar>


    <!-- This anchor is just a reference to the top of the page -->
    <a id = 'home'></a>

    <p>
      Red tide, a harmful algae bloom that regularly occurs on the coasts of Florida, creates toxic
      conditions that negatively impact the environment, marine animals, and human health. It can ruin
      beach days and endanger animals that call the Florida coasts their home. This dashboard is a collection
      of updated information to help you stay up-to-date on the current status of red tide in Florida.
    </p>
    <!-- <app-test-box></app-test-box> -->


    <!-- Put twitter content right under this anchor -->
    <a id = 'twitter'></a>
    <app-bar-graph></app-bar-graph>
    <app-tweet-list></app-tweet-list>

    <!-- Put youtube content right under this anchor -->
    <a id = 'youtube'></a>
    <app-youtube-panel></app-youtube-panel>

    <!-- Put spotify content right under this anchor -->
    <a id = 'spotify'></a>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'florida-dashboard';
}
