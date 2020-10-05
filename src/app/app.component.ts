import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ClgTT';
  d = new Date();
  n = this.d.getDay();
  m = this.d.getMonth();
  M = this.m+1;
  da = this.d.getDate();
  y = this.d.getFullYear();
}
