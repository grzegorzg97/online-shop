import { Component } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [MatGridListModule, ItemComponent]
})
export class ItemListComponent {

}
