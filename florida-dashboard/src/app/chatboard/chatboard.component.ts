import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-chatboard',
  template: `
    <p>
      chatboard works!
    </p>
	
	<div class="chatboard-container">
	
	<app-chatboard-message index=0>
	</app-chatboard-message>
	
	<app-chatboard-message index=1>
	</app-chatboard-message>
	
	<app-chatboard-message index=2>
	</app-chatboard-message>
	
	<p>
	Text:
	</p>
	<input type="text" #text>
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
