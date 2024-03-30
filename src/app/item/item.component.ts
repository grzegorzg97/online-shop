import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { Item } from '../shared/item.model';
import { Router } from '@angular/router';
import { CartService } from '../shopping-cart/shopping-cart.service';



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() item: Item

 
 constructor(public router: Router, private cartService: CartService){

 }
 OnaddToCart(item: Item){
  this.cartService.addToCart(item);
}

 openItemDetails(id: number){
    const url: string = '/items/' + id + '/details'
    this.router.navigateByUrl(url)
 }


}
