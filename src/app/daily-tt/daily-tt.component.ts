import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-tt',
  templateUrl: './daily-tt.component.html',
  styleUrls: ['./daily-tt.component.css']
})
export class DailyTTComponent implements OnInit {

  title = 'ClgTT';
  d = new Date();
  n = this.d.getDay();
  m = this.d.getMonth();
  M = this.m+1;
  da = this.d.getDate();
  y = this.d.getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
