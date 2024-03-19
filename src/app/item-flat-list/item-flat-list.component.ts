import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFlatComponent } from '../item-list/item/item-flat/item-flat.component';


@Component({
  selector: 'app-item-flat-list',
  standalone: true,
  imports: [CommonModule, ItemFlatComponent],
  templateUrl: './item-flat-list.component.html',
  styleUrls: ['./item-flat-list.component.css']
})
export class ItemFlatListComponent {

}
