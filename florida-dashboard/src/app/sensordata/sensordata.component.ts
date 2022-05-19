import { Component, OnInit } from '@angular/core';
import { CellcountData } from '../interfaces/cellcount-data';
import { DatabaseApiService } from '../services/database-api.service';

@Component({
  selector: 'app-sensordata',
  template: `
  <div class="container">
    <div class="title">
      <img src="assets/CellCountKey.png"
      width=206px
      height=166px>
      <p> Sensor Data from Florida Fish and Wildlife Conservation Commission-Fish and Wildlife Research Institute </p>
      <p> This data represents how many cells of red tide (per liter) were found at different beaches </p>

      <!-- Dropdown to choose county -->
      Filter:
      <select
      (change)='filterCounty( getSelectValue($event) )' >
        <option value = "All">All Counties</option>

        <option *ngFor='let county of availableCounties'
        value = {{county}}>
        {{county}}
        </option>

      </select>
    </div>


    <app-sensordata-line *ngFor='let beachData of dataToShow'
      [class]='beachData.abundance'
      [date]='beachData.date'
      [location]='beachData.location'
      [level]='beachData.abundance'
      [source]='beachData.source'  >
    </app-sensordata-line>


	</div>
  `,
  styleUrls: ['./sensordata.component.css']
})
export class SensordataComponent implements OnInit {

  // This is all of the sensor data from our database
  allDataRows: CellcountData[] = [];

  // This is the sensor data to show from our database
  dataToShow: CellcountData[] = [];

  // This is the list of all counties represented in our dataset
  availableCounties: string[] = [];

  constructor(private database: DatabaseApiService) { }

  ngOnInit(): void {

    // Get the sensor data
    this.database.getCellCountByLocation()
    .then( (response) => (response.json()))
    .then( (json) => {

      // Get all of the sensor data, then filter to show all counties
      this.allDataRows = json.cellCountList;
      this.filterCounty("All");

      this.availableCounties = this.getAvailableCounties();
    })
    .catch( (error) => {
      console.log("ERROR: Could not get sensor data.")
      console.error(error);
    });

  }


  /**
   * Rebuild this.dataToShow so that it only has data from the chosen county.
   * Filters data from this.allDataRows into this.dataToShow, so that this method
   * can be called again with a different filter to bring back hidden data.
   *
   * @param countyFilter the name of the county to view, or "All" if the data should be unfiltered.
   */
  filterCounty(countyFilter: string){

    let newEntries = []
    let newIndex = 0;

    // Copy the entry to the new list if the county matches the filter, or if the filter is "All".
    for(let i = 0; i < this.allDataRows.length; i++){
      if(this.allDataRows[i].county == countyFilter || countyFilter == "All"){
        newEntries[newIndex] = this.allDataRows[i];
        newIndex++;
      }
    }
    this.dataToShow = newEntries;
  }

  // https://angular.io/guide/event-binding-concepts
  // Getting value out of component
  /**
   * Returns the value of the input html element this is called from.
   * To use with event binding, inside of the input tag,
   *  you could write:
   * (change)=' getSelectValue( $event ) '
   * which will call this method andn return the value of the input element.
   *
   * You will likely use this in combination with other methods, such as:
   * (change)='filterCounty( getSelectValue($event) )'
   * which will pass the input value into the filterCounty method
   *
   * @param event event from html input element.
   * @returns the value of this html input element
   */
  getSelectValue(event: Event){
    return (event.target as HTMLInputElement).value;
  }

  /**
   * Searches through this.allDataRows to collect all of the unique counties in the array.
   *
   * NOTE: This method is optimized in a way that only works if this.allDataRows are already
   * sorted alphabetically by the element's counties.
   * If two entries from the same county are separated by an entry from a different county, the
   * first county will appear twice in the returned list of this method.
   *
   * @returns List of all unique counties in this.allDataRows (our dataset)
   */
  getAvailableCounties(): string[] {
    let counties: string[] = [];

    // To optimize this method for O(N) time we will iterate through all of the entries,
    // only adding the county to our list if it is different from the previous entry.
    let previousCounty: string = "";

    for (let i = 0; i < this.allDataRows.length; i++){
      if (this.allDataRows[i].county != previousCounty){
        counties.push(this.allDataRows[i].county);
        previousCounty = this.allDataRows[i].county;
      }
    }

    return counties;
  }

}
