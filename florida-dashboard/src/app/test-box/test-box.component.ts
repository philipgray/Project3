import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';

@Component({
  selector: 'app-test-box',
  template: `
    <p>
      test-box works!
    </p>
    <p>
      Test data:
      {{body}}
    </p>
  `,
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent implements OnInit {

  data: string = '';
  headers: string[] = [];
  body: any;

  constructor(private database: DatabaseApiService) { }

  ngOnInit(): void {
    this.database.testNewApi()
    .then( (response) => (response.json()))
    .then( (json) => {
      this.body = json[0].text;
    });
  }

  getData(resp: HttpResponse<any>){
    this.data = resp.body.body;
  }

  testShowDataFetch(){
    this.database.testNewApi()
      .then(
      // Promise fulfilled, data delivered
        (value: any) => {
        this.body = value;
      },
      // Promise unfulfilled, something went wrong
      (reason: any) =>{
        this.body = "Oh no! Here's the error: " + reason;
      });
  }
}
