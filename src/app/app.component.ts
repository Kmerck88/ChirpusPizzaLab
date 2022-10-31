import { Component } from '@angular/core';
import { MenuItem } from './menuitem'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChirpusPizza';

  // Create an array of menu items
  menuItems: MenuItem[] = [

    { item: 'Pepperoni', category: 'Pizza', price: 10.99 },

    { item: 'Cheese', category: 'Pizza', price: 9.99 },

    { item: 'Soda', category: 'Drink', price: 1.99 },

    { item: 'Beer', category: 'Drink', price: 2.99 },

    { item: 'Wings', category: 'Appetizer', price: 5.99 },

  ];
}


