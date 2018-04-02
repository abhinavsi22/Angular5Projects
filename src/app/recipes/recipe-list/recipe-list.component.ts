import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
recipes: Recipe[] = [
  new Recipe('Iphone', 'Test Description', 'http://wonder-x.jp/wp-content/uploads/2018/04/iphone-x-notch.png'),
  new Recipe('Samsung', 'Test Description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWS5O9MFfQn19Ja82NSuSPvD0qjAJ_l26-lETlAWv6op2URtML')

];
  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe) {
this.recipeWasSelected.emit(recipe);
  }

}
