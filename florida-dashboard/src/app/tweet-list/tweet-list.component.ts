import { Component, OnInit } from '@angular/core';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-tweet-list',
  template: `
  <div class="twitter-container">
    <div class="title">
      <p>
        Recent Tweets:
      </p>
    </div>

    <app-tweet *ngFor='let tweet of tweets'
      [tweet]='tweet'>
    </app-tweet>

    Updated daily at midnight EST. 
	</div>
  `,
  styleUrls: ['./tweet-list.component.css']
})
export class TweetListComponent implements OnInit {

  tweets: Tweet[] = []

  constructor() { }

  ngOnInit(): void {
    this.loadPlaceholderTweets();
  }


  /**
   * This method should be deleted before the final release.
   * It only exists so that we can visualize tweets before connecting the database.
   */
  loadPlaceholderTweets(){
    this.tweets = [
      {
      '_id': '1516885210868027392',
      'created_at': '2022-04-20T21:03:11.000Z',
      'link': 'https://www.twitter.com/twitter/status/1516885210868027392',
      'text': 'You know when they cut those branches you can make compost out of them. They have to trim bushes. So that makes plant food right? Like Algae Eaters would clean up Red Tide? Its Algae? God gave you what you needed.',
      'likes': '10',
      'replies': '12',
      'retweets': '14'
        },
        {
          '_id': '111111',
          'created_at': '2022-04-20T21:03:11.000Z',
          'link': 'https://www.twitter.com/twitter/status/1516885210868027392',
          'text': 'testing 123',
          'likes': '10',
          'replies': '12',
          'retweets': '14'
        }
      ]
  }
}
