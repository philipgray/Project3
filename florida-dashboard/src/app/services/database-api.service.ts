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

  constructor(private http: HttpClient) { }


  /**
   * Retrieves frequency data for tweets/month about red tide from the database
   */
  getHistoricalTwitterData(): Promise<any>{
    return fetch('http://127.0.0.1:5000/api/v1/redtide/tweets/history/frequency', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
      }
    })
  }
  
  getMessages(): Promise<any>{
    return fetch('http://127.0.0.1:5000/messages/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*',
      }
    })
  }

  testNewApi(){
    return fetch('http://127.0.0.1:5000/api/v1/redtide/tweets/all', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Request-Headers': '*'
      }
    });
  }

}
