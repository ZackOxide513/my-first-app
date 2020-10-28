import { EventEmitter, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredients(ingredients: Ingredient[]): void {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }

    clearIngredients(): void {
        this.ingredients.splice(0, this.ingredients.length);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}