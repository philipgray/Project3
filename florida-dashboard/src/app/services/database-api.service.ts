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

  databaseUrl = 'https://data.mongodb-api.com/app/data-ijcxi/endpoint/data/beta';
  postEndpoint = this.databaseUrl + '/action/findOne';
  apiKey = 'pq8Q59bT7P4RYOZANqajAvsFxjAcDjJjimWZ0fTRpvGP6k0pAkkSPcDjKIRn9S4a';

  payload = {
    "collection": "tweets",
    "database": "redtideDB",
    "dataSource": "Project-3",
    "filter": {}
  };

  headers = {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    // 'Access-Control-Allow-Origin': '*',
    'api-key': 'pq8Q59bT7P4RYOZANqajAvsFxjAcDjJjimWZ0fTRpvGP6k0pAkkSPcDjKIRn9S4a'
  }

  constructor(private http: HttpClient) { }

  /**
   * Test gettin g data from the database with a simple api request
   * TODO: refactor with an interface to specify the response type
   */
  testGetData(): Observable<HttpResponse<any>>{
    return this.http.post<any>(this.postEndpoint, this.payload, {
      // Options
      headers: this.headers
    })
  }

  testFetchGetData(): Promise<any> {
    return fetch('https://data.mongodb-api.com/app/data-ijcxi/endpoint/data/beta/action/findOne', {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': this.apiKey
      },
      body: JSON.stringify({    "collection":"tweets",    "database":"redtideDB",    "dataSource":"Project-3", })
    });
  }


  testNewApi(){
    return fetch('http://34.228.160.243:3000/api/v1/redtide/tweets/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*'
      }
    });
  }

  /**
   * Retrieves preprocessed historical twitter data,
   * in the form of a list with months and number of tweets
   *
   * example "08/2017": 47
   */
  getHistoricalData(){
    // Get json dictionary containing the data
    // Example:
    /**
     * {
     *  "2017/08": 47,
     *  "2017/09": 67
     * }
     */
    //TODO: Put the api call to get that data

    return [
      ["2017/06", 30],
      ["2017/07", 40],
      ["2017/08", 49],
      ["2017/09", 17],
      ["2017/10", 11],
      ["2017/11", 18],
      ["2017/12", 48],
      ["2018/01", 126],
      ["2018/02", 12],
      ["2018/03", 162],
      ["2018/04", 45],
      ["2018/05", 43],
      ["2018/06", 623],
      ["2018/07", 1429],
      ["2018/08", 20494],
      ["2018/09", 19709],
      ["2018/10", 5996],
      ["2018/11", 2911],
      ["2018/12", 1371],
      ["2019/01", 1603],
      ["2019/02", 1227],
      ["2019/03", 505],
      ["2019/04", 499],
      ["2019/05", 685]
    ];
  }
}
