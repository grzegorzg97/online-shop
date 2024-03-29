import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from './shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {



  constructor(public cartService: CartService){}

  checkCart() {
    console.log(this.cartService.listOfItems)

  }
}
