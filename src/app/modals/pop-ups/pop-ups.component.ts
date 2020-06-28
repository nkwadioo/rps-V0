import { Component, OnInit, Inject, Input } from '@angular/core';
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-pop-ups',
  templateUrl: './pop-ups.component.html',
  styleUrls: ['./pop-ups.component.scss']
})
export class PopUpsComponent implements OnInit {
  src;
  @Input() results: any;

  constructor() {

  }

  ngOnInit(): void {
    // debugger;
    if (this.results == 'WIN') {
      this.src = '/assets/cheetFrames/you win.svg';
    }else if (this.results == 'LOOSE') {
      this.src = '/assets/cheetFrames/you loose.svg';
    }else {
      this.src = '/assets/cheetFrames/its a tie.svg';
    }
  }

  close() {
    // close model view
  }

}
