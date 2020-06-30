import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  tabInput = 'login';
  constructor() { }

  ngOnInit(): void {
  }

  toggleTab(val) {
    this.tabInput = val;
  }

}
