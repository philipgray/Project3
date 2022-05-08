import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-chatboard',
  template: `
	<div class="chatboard-container">
	<p>Red Tide Chatboard:</p>
	<p class="subtext"> You can chat with people about red tide below.<p>
	<div class="message-container">
	<app-chatboard-message index=0>
	</app-chatboard-message>
	
	<app-chatboard-message index=1>
	</app-chatboard-message>
	
	<app-chatboard-message index=2>
	</app-chatboard-message>
	<app-chatboard-message index=3>
	</app-chatboard-message>
	<app-chatboard-message index=4>
	</app-chatboard-message>
	<app-chatboard-message index=5>
	</app-chatboard-message>
	<app-chatboard-message index=6>
	</app-chatboard-message>
	<app-chatboard-message index=7>
	</app-chatboard-message>
	<app-chatboard-message index=8>
	</app-chatboard-message>
	<app-chatboard-message index=9>
	</app-chatboard-message>
	
	</div>
	<div class="textboxes">
	<p>
	Text:
	</p>
	<input type="text" #text class="messageTextBox">
	<p>
	Location:
	</p>
	<input type="text" #location>
	<p>
	Name:
	</p>
	<input type="text" #name>
	
	<button (click)="getValues(text.value, location.value, name.value)">Send</button>
	</div>
	<div>
	<p></p></div>
	</div>
	`,
  styleUrls: ['./chatboard.component.css']
})
export class ChatboardComponent implements OnInit {
	data: string = '';
	headers: string[] = [];
	body1: any;
	body2: any;
	text: string = '';
	jsonvalues: any;
	
	getValues(text:string, location:string, name:string){
	/*
		const data:JSON = <JSON><unknown>{"name": name, "location": location, "message": text}
		const jsondata = JSON.stringify(data);
		console.log(jsondata)
		fetch("http://localhost:5000/messages/post", {method: 'POST', body: jsondata, headers: {'Content-Type': 'application/json; charset=UTF-8'}}).then((response) => response.json())
		//Then with the data from the response in JSON...
			.then((data) => {
		console.log('Success:', data);
		})
		//Then with the error genereted...
		.catch((error) => {
		console.error('Error:', error);
		});;
	*/
	
	// I know this is horrible and open to all sorts of injection but it works and that's what matters.
	// I couldn't get post working.
		fetch("http://localhost:5000/messages/send?name="+name+"&location="+location+"&message="+text)
	}

	

  constructor(private database: DatabaseApiService) { 
  this.database.getMessages()
    .then( (response) => (response.json()))
    .then( (json) => {
	this.jsonvalues = json;
	  
	  this.body1 = json[1].message;
	  this.body2 = json[2].message;
    });}

  ngOnInit(): void {
  }

}
