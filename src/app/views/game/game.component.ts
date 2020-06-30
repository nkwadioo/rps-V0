import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

// import { DialogService } from '../../modals/dialog.service';

@Component({
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  rcp = [
    1,2,3,
    2,3,1,
    2,1,3, // 9
    1,1,2,
    2,1,2,
    1,1,2, // 18
    2,3,3,
    1,2,2,
    3,3,2, // 27
    1,1,1,
    2,1,3,
    2,3,3, // 36
    2,2,3,
    2,2,2,
    2,3,1  // 45
  ];
  faceValRCP = ['rock', 'paper', 'scissors'];
  me_select;
  comp_select;
  results;
  src;
  showMsg = false;

  constructor() { }

  ngOnInit(): void {
    this.showMsg = false;
  }

  mySelection(elmValue, compForm: NgForm, meForm: NgForm) {
    this.showMsg = false;
    const compSelect = this.rcp[Math.floor(Math.random() * 45)];
    compForm.controls.comp_select.setValue(compSelect.toString());
    const myValue = meForm.controls.me_select.value;
    const compSel = compForm.controls.comp_select.value;
    console.log(`me: ${myValue} VS comp: ${compSel}`);
    this.showMessage(this.getWinner(compSel, myValue));

  }

  showMessage(result) {
    // console.log('YOu: '+ result)
    // this.dialog.openDialog(result);
    // this.results = result;
    this.showMsg = true;
    if (result == 'WIN') {
      this.src = '/assets/cheetFrames/you win.svg';
    }else if (result == 'LOOSE') {
      this.src = '/assets/cheetFrames/you loose.svg';
    }else {
      this.src = '/assets/cheetFrames/its a tie.svg';
    }
  }

  getWinner(comp, me) {
    if (comp === me) {
      return 'TIE';
    }else if(comp > me) {
        return 'LOOSE';
    }else
      return 'WIN';
  }

  close(compForm: NgForm, meForm: NgForm) {
    compForm.reset();
    meForm.reset();
    this.showMsg = false;
  }



}
