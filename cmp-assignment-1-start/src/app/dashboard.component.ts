import { Component } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  template: `
  <h2> This is the dashboard!</h2>
  <p [textContent]="loadState"> </p>
  <div>
  <button (click)="onClick()">Finish</button>
  </div>
  <input type="text" [(ngModel)]="loadState">
  `
})

export class DashboardComponent {
  loadState = 'loading';

  onClick() {
    this.loadState = 'finished';
  }
}
