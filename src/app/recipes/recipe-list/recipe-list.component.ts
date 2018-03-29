import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('Test Recipe', 'Test Description', 'https://myfoodstory.com/wp-content/uploads/2017/02/Oven-Baked-Tandoori-Paneer-Tikka-4.jpg'),
  new Recipe('Test Recipe', 'Test Description', 'https://upload.wikimedia.org/wikipedia/commons/b/bd/Tandoorimumbai.jpg')

];
  constructor() { }

  ngOnInit() {
  }

}
