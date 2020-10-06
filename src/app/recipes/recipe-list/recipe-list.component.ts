import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [ 
    new Recipe('Yoghurt', 'How to make Yoghurt', 'https://media.healthyfood.com/wp-content/uploads/2017/04/HTC-natural-yoghurt-iStock_58226440.jpg'),
    new Recipe('Tom Yam Soup', 'A delicious Thai-style soup', 'https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2015/06/tom-yum-12-1-sur-1.jpg?fit=2048%2C1849')
  ];
  
  constructor() { 

  }

  ngOnInit(): void {
  }

}
