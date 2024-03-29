import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ItemService } from '../item.service';
import { Item } from '../shared/item.model';
import { CartService } from '../shopping-cart/shopping-cart.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-item-details',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item;
  id: number;

  constructor(public itemService: ItemService, private route: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params ['id'];
        this.item = this.itemService.getItem(this.id);
      }
    )
  }

  }




