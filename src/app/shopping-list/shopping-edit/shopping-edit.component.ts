import { Component, OnInit , OnDestroy , ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
// @ViewChild('nameInput') nameInputRef: ElementRef;
// @ViewChild('amountInput') amountInputRef: ElementRef;
@ViewChild('addForm') addItemForm: NgForm;
subscription: Subscription;
editMode: Boolean = false;
editIndex: Number;
editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
   this.subscription = this.shoppingListService.ingredientsEdit.subscribe(
      (index: Number) => {
        this.editMode = true;
        this.editIndex = index;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.addItemForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  ngOnDestroy(): void {

  }

  onAddIngredient() {
    // const ingredientName = this.nameInputRef.nativeElement.value;
    // const ingredientAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(ingredientName , ingredientAmount);
    // // this.ingredientAdded.emit(newIngredient);
    // this.shoppingListService.addIngredient(newIngredient);
    const ingredientName = this.addItemForm.value.name;
    const ingredientAmount = this.addItemForm.value.amount;
    const newIngredient = new Ingredient(ingredientName , ingredientAmount);
    if( this.editMode ) {
      this.shoppingListService.updateIngredient(this.editIndex, newIngredient);

    } else {
    this.shoppingListService.addIngredient(newIngredient);
    }
    this.editMode = false;
    console.log(this.addItemForm);
    this.addItemForm.onReset();

  }
  onClear() {
    this.addItemForm.onReset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editIndex);
    this.onClear();
  }
}
