// Service to connect to mongo db to communicate with the database
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Tweet } from '../interfaces/tweet';

@Injectable({
  providedIn: 'root'
})
export class DatabaseApiService {

  private backendApiEndpoint = 'http://34.228.160.243:3000'

  constructor(private http: HttpClient) { }


  /**
   * Retrieves frequency data for tweets/month about red tide from the database
   */
  getHistoricalTwitterData(): Promise<any>{
    return fetch(this.backendApiEndpoint + '/api/v1/redtide/tweets/history/frequency', {

      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
      }
    })
  }

  testNewApi(){

    return fetch(this.backendApiEndpoint + '/api/v1/redtide/tweets/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*'
      }
    });
  }

  /**
   * Retrieves the most recent video in our database matching the specified category
   * (the video most recently chosen by our backend)
   * @param category the category of video (symptoms, awareness, prevention)
   */
  getRecentYoutubeVideo(category: string) {
    return fetch(this.backendApiEndpoint + '/api/v1/redtide/youtube?category=' + category, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*'
      }
    });
  }

  getMessages(): Promise<any>{
    return fetch(this.backendApiEndpoint + '/messages/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
      }
    })
  }

  /**
   * Retrives the current cell count information in our database.
   * To get the data, use .then() to get the json from the response,
   * then use another .then() to index into the json and access ['cellCountList']
   * @returns Javascript promise containing a json dictionary with a key 'cellCountList'
   * that has a list of entries from our database.
   */
  getCellCountByLocation() {
    return fetch(this.backendApiEndpoint + '/api/v1/redtide/cellcounts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*'
      }
    });
  }


}
