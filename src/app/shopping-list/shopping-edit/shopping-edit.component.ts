import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput') nameInputRef: ElementRef;
@ViewChild('amountInput') amountInputRef: ElementRef;
@Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    const ingredientName = this.nameInputRef.nativeElement.value;
    const ingredientAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingredientName , ingredientAmount);
    // this.ingredientAdded.emit(newIngredient);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
