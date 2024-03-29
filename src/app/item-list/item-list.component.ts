import { Component, } from '@angular/core';

import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { ItemComponent } from '../item/item.component';
import { ItemService } from '../item.service';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule, ItemComponent]
})
export class ItemListComponent {

  constructor(public itemService:ItemService, private dsService: DataStorageService){
  }
  onSaveItems(){
    this.dsService.storeItems()
  }
  onFetchItems(){
    this.dsService.fetchItems().subscribe();
  }
}
