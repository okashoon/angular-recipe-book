import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../ingredient'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent implements OnInit {

  //ingredients will be added here
  items: Ingredient[] = []

  constructor() { }

  ngOnInit() {
  }

}
