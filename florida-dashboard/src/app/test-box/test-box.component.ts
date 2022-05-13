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
    <button
    (click)='this.filterSarasota()'> CLICK FOR SARASOTA?? </button>


    <!-- select.value (really input.value) contains the selected option -->
    <!-- When the value changes, filter the list by county based on the selected option -->
    <select
    (change)='filterCounty( getSelectValue($event) )' >

    <!-- Option for all counties -->
    <option value = 'All'>All Counties</option>

    <!-- Option for every county in this.counties list -->
    <option *ngFor='let county of counties'
    value = {{county}}>
      {{county}}
    </option>


    </select>

    <p>
      Test data:
      {{body}}
      {{link}}
    </p>
    <p *ngFor='let cell of cellsToShow'>
      {{cell.county}} what the beach: {{cell.location}}
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

  cellsToShow: CellcountData[] = [];

  counties = ["Sarasota", "Bay", "Brevard", "Broward", "Charlotte", "Citrus",
    "Collier", "Escambia", "Flagler", "Franklin", "Hillsborough", "Lee",
    "Levy", "Manatee", "Monroe", "Okaloosa", "Palm Beach", "Pasco",
    "Pinellas"];

  constructor(private database: DatabaseApiService) { }

  ngOnInit(): void {

    this.database.getMessages()
    .then( (response) => (response.json()))
    .then( (json) => {
      this.body = json[0].message;
    });

  }

  getData(resp: HttpResponse<any>){
    this.data = resp.body.body;
  }

  testShowDataFetch(){

    // this.database.testNewApi()

    this.database.getMessages()
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

  filterSarasota(){
    let newEntries = []
    let newIndex = 0;
    console.log("bruh");
    for(let i = 0; i < this.cells.length; i++){
      if(this.cells[i].county == "Sarasota"){
        newEntries[newIndex] = this.cells[i];
        newIndex++;
      }
    }
    this.cellsToShow = newEntries;
  }


  filterCounty(countyFilter: string){

    let newEntries = []
    let newIndex = 0;
    for(let i = 0; i < this.cells.length; i++){
      if(this.cells[i].county == countyFilter || countyFilter == "All"){
        newEntries[newIndex] = this.cells[i];
        newIndex++;
      }
    }
    this.cellsToShow = newEntries;
  }

  // https://angular.io/guide/event-binding-concepts
  // Getting value out of component
  getSelectValue(event: Event){
    return (event.target as HTMLInputElement).value;
  }
}
