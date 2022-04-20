import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
    <!-- This anchor is just a reference to the top of the page -->
    <a id = 'home'></a>

    <!-- Navigation bar to stay at top of screen -->
    <app-navigation-bar></app-navigation-bar>

    <!-- <app-test-box></app-test-box> -->


    <!-- Put twitter content right under this anchor -->
    <a id = 'twitter'></a>

    <!-- Put youtube content right under this anchor -->
    <a id = 'youtube'></a>


    <!-- Put spotify content right under this anchor -->
    <a id = 'spotify'></a>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'florida-dashboard';
}
