import { Injectable, Input } from '@angular/core';
import { Item } from '../shared/item.model';

export interface itemsInCart{
  item: Item;
  count: number;
}


@Injectable({
  providedIn: 'root'
})
export class CartService {

    listOfItems: Item[]

    constructor() {
      this.listOfItems = []
      }

    addToCart(item: Item){
      this.listOfItems.push(item);
    }

}
