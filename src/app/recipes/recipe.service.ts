import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(0, 'Iphone', 'Full Proof',
    'http://wonder-x.jp/wp-content/uploads/2018/04/iphone-x-notch.png',
    [
      new Ingredient('Prepaid', 21),
      new Ingredient('Postpaid', 31)
    ]),
    // tslint:disable-next-line:max-line-length
    new Recipe(1, 'Samsung',
    'Dust Proof Device',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWS5O9MFfQn19Ja82NSuSPvD0qjAJ_l26-lETlAWv6op2URtML',
    [
      new Ingredient('Prepaid', 22),
      new Ingredient('Postpaid', 32)

  ]),
    // tslint:disable-next-line:max-line-length
    new Recipe(2, 'Micromax',
    'Water Proof Device',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ3-J8sA5XwJ_Ck6r17DbRhodafUtQG4nbIlirsURyExqVXkpT',
    [
      new Ingredient('Prepaid', 23),
      new Ingredient('Postpaid', 33)
    ])

  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
