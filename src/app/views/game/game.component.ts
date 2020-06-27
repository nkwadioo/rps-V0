import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  rcp = [
    'rock','paper','paper',
    'rock','paper','rock',
    'rock','rock','rock',
    'scissors','paper','paper',
    'rock','paper','scissors',
    'scissors','paper','scissors',
  ]
  me_select;
  comp_select;
  constructor() { }

  ngOnInit(): void {
  }

  mySelection(elmValue, compForm: NgForm, meForm: NgForm) {
    const compSelect = this.rcp[Math.floor(Math.random() * 18)];
    compForm.controls.comp_select.setValue(compSelect);
    console.log(`me: ${elmValue} VS comp: ${compSelect}`);
    this.showMessage(this.getWinner(compSelect, elmValue));

  }

  showMessage(result) {
    console.log('YOu: '+ result)
  }

  getWinner(comp, me) {
    if (comp === me) {
      return 'TIE';
    }else if(comp === 'rock') {
      if (me === 'paper') {
        return 'WIN';
      }else {
        return 'LOOSE';
      }
    }else if(comp === 'paper') {
      if (me === 'rock') {
        return 'LOOSE';
      }else {
        return 'WIN';
      }
    }else {
      if (me === 'paper') {
        return 'LOOSE';
      }else {
        return 'WIN';
      }
    }
  }

}
