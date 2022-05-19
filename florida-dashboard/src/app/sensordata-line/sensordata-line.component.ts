
import { Component, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sensordata-line',
  template: `
    <div class='line'
    title={{level}}>
    {{location}}
    <br>
      <div class="indent">Algae count: {{level}} </div>
      <div class="indent">Date updated: {{date}}</div>
    </div>
  `,
  styleUrls: ['./sensordata-line.component.css']
})
export class SensordataLineComponent implements OnInit {
	@Input() date = "";
	@Input() location = "";
	@Input() level = "";
	@Input() source = "";
  constructor() { }

  ngOnInit(): void {
  }

}
