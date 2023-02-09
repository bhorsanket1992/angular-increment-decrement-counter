import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button (click)="count = count + 1">+1</button>
  <p>{{count}}</p>
  <button (click)="count = count ?  count - 1 : 0" [disabled]="!count">-1</button>
  `,
})
export class App {
  count = 0;
}

bootstrapApplication(App);
