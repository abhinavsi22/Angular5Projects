import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
recipe: Recipe;


  constructor(private recipeService: RecipeService, private slService: ShoppingListService,
  private route: ActivatedRoute) { }

  ngOnInit() {




    this.route.params.subscribe(
      (params: Params) => {
        const id = +params['id'];
        this.recipe = this.recipeService.getRecipes()[id];

      }
    );

  }

  onAddToList() {
     this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
