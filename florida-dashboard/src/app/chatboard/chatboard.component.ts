import { Component, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';
import { HttpResponse } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Fakemessagedata } from '../interfaces/fakemessagedata';

@Component({
  selector: 'app-chatboard',
  template: `
	<div class="chatboard-container">
	<p>Red Tide Chatboard:</p>
	<p class="subtext"> You can chat with people about red tide below.<p>
	<div class="message-container">
	
	<div *ngFor="let Fakemessagedata of values;">
		<div class="message">
	<p>
      
      {{Fakemessagedata.text}}
    </p>
	<div class="name">
	<p>
	Name: {{Fakemessagedata.name}} 
	</p>
	<p>
	Location: {{Fakemessagedata.location}}
	</p>
	</div>
	</div>
	</div>
	
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
	<input type="text" id="1" #text class="messageTextBox" id="a">
	<p>
	Location:
	</p>
	<input type="text" id="2" #location id="b">
	<p>
	Name:
	</p>
	<input type="text" id="3" #name id="c">
	
	<button (click)="getValues(text.value, location.value, name.value, this.score)">Send</button>
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
	score: number = 0;
	values: Fakemessagedata[] = [];

	getValues(text:string, location:string, name:string, score:number){
		this.values.push({'text': text, 'location': location, 'name': name, 'score': this.score});
		window.location.reload();
		console.log(this.values);
		fetch("https://votesrq.com/messages/send?name="+name+"&location="+location+"&message="+text+"&score="+score);
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
