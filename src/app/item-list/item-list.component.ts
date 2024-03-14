import { Component, } from '@angular/core';

import { MaterialModule } from '../material.module';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [MaterialModule, ItemComponent, CommonModule]
})
export class ItemListComponent {
  



}
