import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template:`<p>Your Dashboard!</p>
  <div>
    <button (click)="onSwitchState()">Switch State</button>
  </div>
  <!--<p>{{ loadState }}</p>-->
  <p [textContent]="loadState"></p>
  <div>
    <!--<input type="text" (input)="loadState = $event.target.value">-->
    <input type="text" [(ngModel)]="loadState">
  </div>
  `
})
export class DashboardComponent {
  loadState = 'loading';

  onSwitchState() {
    this.loadState = 'finished';
  }
}
