import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CellcountData } from '../interfaces/cellcount-data';
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
      {{link}}
    </p>
    <p *ngFor='let cell of cells'>
      {{cell.County}}
    </p>
  `,
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent implements OnInit {

  data: string = '';
  headers: string[] = [];
  body: any;
  link: any;

  cells: CellcountData[] = [];

  constructor(private database: DatabaseApiService) { }

  ngOnInit(): void {
    this.database.testNewApi()
    .then( (response) => (response.json()))
    .then( (json) => {
      this.body = json[0].text;
      this.link = json[0].link;
    });

    this.database.getCellCountByLocation()
    .then( (response) => (response.json()))
    .then( (json) => {
      let entries: [] = json.cellCountList;

      for(let i = 0; i < entries.length; i++){
        console.log('entry', i, entries[i]);
      }

      this.cells = json.cellCountList;
    });

    console.log('OKAY: ', this.cells[0])
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
