import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ItemService } from '../item.service';
import { Item } from '../shared/item.model';
import { CartService } from '../shopping-cart/shopping-cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent {

  item: Item;
  
  id: number = 3;

  constructor(public itemService: ItemService, public cartService: CartService) {
    // item = this.itemService.items.find
  }

    // addToCartOnClick(this.item){
  //   this.cartService.addToCart()
  // }


  }


