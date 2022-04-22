import { Component, OnInit } from '@angular/core';
import { ChartType } from 'angular-google-charts';

// For information on how to change properties of the chart,
// see https://github.com/FERNman/angular-google-charts
// (in particular look at the Readme file)

@Component({
  selector: 'app-bar-graph',
  template: `
	<div class="div">
    <!-- Uses google chart wrapper -->
    <google-chart #chart
      title="Tweets over time"
      [type]="this.chartType"
      [data]="this.tweetFrequency"

      ></google-chart>
	  </div>
  `,
  styleUrls: ['./bar-graph.component.css']
})
export class BarGraphComponent implements OnInit {

  chartType = ChartType.ColumnChart;

  tweetFrequency = [
    ["June 2017", 30],
    ["July 2017", 40],
    ["August 2017", 49],
    ["September 2017", 17],
    ["October 2017", 11]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
