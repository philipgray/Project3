import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { DatabaseApiService } from '../services/database-api.service';

// For information on how to change properties of the chart,
// see https://github.com/FERNman/angular-google-charts
// (in particular look at the Readme file)

@Component({
  selector: 'app-bar-graph',
  template: `
	<div class="div">
    <!-- Uses google chart wrapper -->
    <google-chart #chart
      title="Total Tweets about red tide over time"
      [type]="this.chartType"
      [data]="this.tweetFrequency"
      [width]="this.myWidth"
      [height]="this.myHeight"
      [dynamicResize]=true

      ></google-chart>
	  </div>
  `,
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  chartType = ChartType.ColumnChart;

  myWidth = 700;
  myHeight = 500;
  tweetFrequency = [];

  constructor(private database: DatabaseApiService) { }

  ngOnInit(): void {
    this.database.getHistoricalTwitterData().then((response) => response.json())
    .then((data) => {
      this.tweetFrequency = data;
    });
  }

}
