import { Component, Input, OnInit } from '@angular/core';
// A button that can store an image or text, and which navigates to a different page/href when clicked
// @author Alex Wills

@Component({
  selector: 'app-navigation-button',
  template: `

    <!-- When you click this, it clicks on the anchor object -->
    <button (click)="anchorRef.click()">

      <img [src]='this.imagePath'
           [alt]='this.altText'>

    </button>

    <!-- When you click on the anchor object, it goes to the specified link -->
    <a #anchorRef
    [href]='this.hrefId'></a>
  `,
  styleUrls: ['./navigation-button.component.css']
})
export class NavigationButtonComponent implements OnInit {

  // The value of href to go to when the button is clicked
  @Input() hrefId = "";

  // The image to display on the button
  @Input() imagePath = "";

  // Text to display if the image is not visible
  @Input() altText = "No image";

  constructor() { }

  ngOnInit(): void {
  }


}
