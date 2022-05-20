import { Component, Input, OnInit } from '@angular/core';
import { DatabaseApiService } from '../services/database-api.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-chatboard-message',
  template: `
  
	<div class="message">
	<p>
      
      {{jsonvalues[newindex].message}}
    </p>
	<div class="score">
	<p>
	{{jsonvalues[newindex].score}}
	</p>
	</div>
	<div class="name">
	<p>
	Name: {{jsonvalues[newindex].name}} 
	</p>
	<p>
	Location: {{jsonvalues[newindex].location}}
	</p>
	</div>
	<button (click)="increaseScore()">Like</button>
	<!-- <button (click)="decreaseScore()">Dislike</button> -->
	</div>
	
	
  `,
  styleUrls: ['./chatboard-message.component.css']
})
export class ChatboardMessageComponent implements OnInit {
	@Input() index = "";
	data: string = '';
	headers: string[] = [];
	body1: any;
	body2: any;
	text: string = '';
	jsonvalues: any;
	newindex: number = 0;
	
	increaseScore(){
		this.jsonvalues[this.index].score = parseInt(this.jsonvalues[this.index].score) + 1;
		//window.location.reload();
		console.log(this.jsonvalues[this.index].score);
		fetch("https://votesrq.com/messages/updatescore?index="+this.index+"&score="+this.jsonvalues[this.index].score+"&time="+this.jsonvalues[this.index]._id);
	}
	decreaseScore(){
		this.jsonvalues[this.index].score = parseInt(this.jsonvalues[this.index].score) - 1;
		//window.location.reload();
		console.log(this.jsonvalues[this.index].score);
	}
	
	
  constructor(private database: DatabaseApiService) { 
  this.database.getMessages()
    .then( (response) => (response.json()))
    .then( (json) => {
		this.jsonvalues = json;
		this.newindex = parseInt(this.index);
		this.body1 = json[1].message;
		this.body2 = json[2].message;
    });}

  ngOnInit(): void {
  }

}
