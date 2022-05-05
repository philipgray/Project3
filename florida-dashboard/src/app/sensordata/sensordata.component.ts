import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensordata',
  template: `
    <div class="container">
	<p>| Date | Location | Level | Source |
	<app-sensordata-line date="4/20/69" location=narnia level=extreme source=FWC style="background-color: #F00;"></app-sensordata-line>
	<app-sensordata-line date="1/7/38" location=narnia level=extreme source=FWC></app-sensordata-line>
	<app-sensordata-line date="1/3/37" location=narnia level=extreme source=FWC></app-sensordata-line>
	</div>
  `,
  styleUrls: ['./sensordata.component.css']
})
export class SensordataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
