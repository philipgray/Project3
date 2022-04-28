import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestBoxComponent } from './test-box/test-box.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { NavigationButtonComponent } from './navigation-button/navigation-button.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { SafePipe } from './pipes/safe.pipe';
import { YoutubePanelComponent } from './youtube-panel/youtube-panel.component';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { TweetListComponent } from './tweet-list/tweet-list.component';
import { TweetComponent } from './tweet/tweet.component';
import { ChatboardComponent } from './chatboard/chatboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TestBoxComponent,
    NavigationBarComponent,
    NavigationButtonComponent,
    YoutubeVideoComponent,
    SafePipe,
    YoutubePanelComponent,
    BarGraphComponent,
    TweetListComponent,
    TweetComponent,
    ChatboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
