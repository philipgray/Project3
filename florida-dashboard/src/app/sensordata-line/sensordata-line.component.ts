
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-sensordata-line',
  template: `
    <p class="line">
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
