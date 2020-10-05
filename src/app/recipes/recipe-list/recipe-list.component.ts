import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ new Recipe('Yoghurt', 'How to make Yoghurt', 'https://media.healthyfood.com/wp-content/uploads/2017/04/HTC-natural-yoghurt-iStock_58226440.jpg')];
  constructor() { }

  ngOnInit(): void {
  }

}
