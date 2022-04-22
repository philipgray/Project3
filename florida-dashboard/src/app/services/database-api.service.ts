// Service to connect to mongo db to communicate with the database
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

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
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Access-Control-Request-Headers': '*',
          'api-key': this.apiKey
      },
      body: JSON.stringify({    "collection":"tweets",    "database":"redtideDB",    "dataSource":"Project-3", })
    });
  }
}
