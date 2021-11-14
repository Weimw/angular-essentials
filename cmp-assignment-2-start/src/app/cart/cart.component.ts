import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() item = [];
  newItem = '';
  @Output() itemAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    this.itemAdded.emit(this.newItem);
  }
}
