import { Component, OnInit } from '@angular/core';
import JSConfetti from 'js-confetti'

/**
 * Displays confetti when the user puts in the correct answer to a question
 *
 * Uses: https://github.com/loonywizard/js-confetti
 *
 * @author Alex Wills
 */
@Component({
  selector: 'app-confetti-box',
  template: `
    <div class = 'box'>
      Join
      <input
        (change)='checkAnswer( getValue($event) )'>
      Club
    </div>
  `,
  styleUrls: ['./confetti-box.component.css']
})
export class ConfettiBoxComponent implements OnInit {

  answer: string = "climbing";

  constructor() { }

  ngOnInit(): void {
  }

  confetti(){
    const jsConfetti = new JSConfetti()

    jsConfetti.addConfetti({
      confettiNumber: 500
    })
  }


  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  checkAnswer(answer: string){
    if (answer.toLowerCase() == this.answer) {
      this.confetti();
    }
  }
}
