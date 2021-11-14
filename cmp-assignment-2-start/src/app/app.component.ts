import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootItem = ['Apples', 'Bananas', 'Cherries'];

  addItem(newItem) {
    this.rootItem.push(newItem);
    console.log(this.rootItem);
  }
}
