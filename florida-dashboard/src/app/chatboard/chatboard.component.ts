import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-chatboard',
  template: `
    <p>
      chatboard works!
    </p>
	
	<div class="message">
	<p>
      Message:
      {{body}}
    </p>
	</div>
	<div class="message">
	<p>
      Message:
      {{body1}}
    </p>
	</div>
	<div class="message">
	<p>
      Message:
      {{body2}}
    </p>
	</div>
	
	<input type="text" #text>
	<input type="text" #location>
	<input type="text" #name>
	
	<button (click)="getValues(text.value, location.value, name.value)">Send</button>
	
	`,
  styleUrls: ['./chatboard.component.css']
})
export class ChatboardComponent implements OnInit {
	data: string = '';
	headers: string[] = [];
	body: any;
	body1: any;
	body2: any;
	
	text: string = '';
	
	getValues(text:string, location:string, name:string){
		console.log(text, location, name)
	}

  constructor(private database: DatabaseApiService) { 
  this.database.getMessages()
    .then( (response) => (response.json()))
    .then( (json) => {
      this.body = json[0].message;
	  this.body1 = json[1].message;
	  this.body2 = json[2].message;
    });}

  ngOnInit(): void {
  }

}
