import { Component, } from '@angular/core';

import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule, ItemComponent]
})
export class ItemListComponent {

  constructor(public itemService:ItemService){

  }
}
