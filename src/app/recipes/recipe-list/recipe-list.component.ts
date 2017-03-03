import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] =[
    new Recipe('pizza', 'delicious with meat', 'https://thumbs.dreamstime.com/z/cartoon-pizza-slice-28846707.jpg',[]),
    new Recipe('Rice', 'White rice nomrally cooked', 'https://image.shutterstock.com/z/stock-vector-cartoon-vector-illustration-of-a-rice-bowl-128210993.jpg',[]),
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe){
    this.recipeSelected.emit(recipe);
  }

}
