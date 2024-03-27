import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ItemFlatListComponent } from '../item-flat-list/item-flat-list.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-sort-items',
  standalone: true,
  imports: [CommonModule, MaterialModule, ItemFlatListComponent, ItemListComponent, FormsModule],
  templateUrl: './sort-items.component.html',
  styleUrls: ['./sort-items.component.css']
})
export class SortItemsComponent {
  sortType: string;
}
