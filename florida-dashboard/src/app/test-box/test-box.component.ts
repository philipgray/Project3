import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-box',
  template: `
    <p>
      test-box works!
    </p>
  `,
  styleUrls: ['./test-box.component.css']
})
export class TestBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
