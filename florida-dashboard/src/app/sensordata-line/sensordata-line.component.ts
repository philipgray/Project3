
import { Component, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-sensordata-line',
  template: `
    <p class='line'
    title={{level}}>
  | {{date}} | {{location}} | {{level}} | {{source}} |
    </p>
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
