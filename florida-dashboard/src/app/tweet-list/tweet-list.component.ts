import { Component, OnInit } from '@angular/core';
import { Tweet } from '../interfaces/tweet';
import { DatabaseApiService } from '../services/database-api.service';

@Component({
  selector: 'app-tweet-list',
  template: `
  <div class="twittercontainer">
  <div class="title">
    <p>
      Recent Tweets:
    </p>
	</div>

    <app-tweet *ngFor='let tweet of tweets'
      [tweet]='tweet'>
    </app-tweet>
	</div>
  `,
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  tweets: Tweet[] = []

  constructor(private database: DatabaseApiService) {
  }

  ngOnInit(): void {
  }
}
