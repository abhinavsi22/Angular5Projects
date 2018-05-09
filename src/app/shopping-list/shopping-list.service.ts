import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShoppingListService {
ingredientsUpdated = new Subject<Ingredient[]>();
ingredientsEdit = new Subject<Number>();
ingredientsDelete = new Subject<Number>();


  ingredients: Ingredient[] = [
    new Ingredient('Prepaid' , 5),
    new Ingredient('PostPaid', 10)
  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(id) {
    return this.ingredients[id];
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
  updateIngredient(id, newIngredient: Ingredient) {
    this.ingredients[id] =  newIngredient;
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
  deleteIngredient(id) {
    this.ingredients.splice( id, 1 );
    this.ingredientsUpdated.next(this.ingredients.slice());
  }
}
