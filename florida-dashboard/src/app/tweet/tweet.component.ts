import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from '../interfaces/tweet';
import { DatabaseApiService } from '../services/database-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-tweet',
  template: `
    <!-- Display tweet text -->
    <p>
      {{ this.tweet.text }}
      testing lol
    </p>
    `,
  styleUrls: ['./tweet.component.css']
})
export class TweetComponent implements OnInit {
  @Input()
  tweet: Tweet;
  data: any;


  constructor(private database: DatabaseApiService) {
    this.tweet = {
      '_id': '1516885210868027392',
      'created_at': '10/13/2020',
      'link': '',
      'text': 'ERROR: Tweet not found.',
      'likes': 13,
      'replies': 1500, 
      'retweets': 2000
      }

  }

  getData(resp: HttpResponse<any>){
    this.data = resp.body.body;
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
