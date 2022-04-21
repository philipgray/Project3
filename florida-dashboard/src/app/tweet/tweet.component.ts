import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../interfaces/tweet';

@Component({
  selector: 'app-tweet',
  template: `
    <!-- Display tweet text -->
    <p>
      {{ this.tweet.text }}

    </p>

    <div class="date">
      {{ this.createdAtToDate(this.tweet.created_at)}}
    </div>
    `,
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {

  @Input() tweet: Tweet;

  constructor() {
    this.tweet = {'_id': '0',
    'created_at': '0',
    'link': '',
    'text': 'ERROR: Tweet not found.'}
  }

  ngOnInit(): void {
  }

    /**
   * Converts from twitter's created_at date to a readable date
   * @param created_at twitter's created_at value, formated year-month-day
   */
     createdAtToDate(created_at: string): string {
      var components = created_at.split('-');
      var day = components[2].substring(0, 2);

      return components[1] + '/' + day + '/' + components[0];
    }

}
