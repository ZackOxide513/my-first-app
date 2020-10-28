import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [ 
        new Recipe('Yoghurt', 
        'How to make Yoghurt', 
        'https://media.healthyfood.com/wp-content/uploads/2017/04/HTC-natural-yoghurt-iStock_58226440.jpg', 
        [new Ingredient('Milk', 5), new Ingredient('Strawberry', 5)]),
        new Recipe('Tom Yam Soup', 
        'A delicious Thai-style soup', 
        'https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2015/06/tom-yum-12-1-sur-1.jpg?fit=2048%2C1849',
        [new Ingredient('Prawn', 10), new Ingredient('Squid', 10), new Ingredient('Tom yam sauce', 2)])
    ];
    
    selectedRecipe = new EventEmitter<Recipe>();

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes(): Recipe[] {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}