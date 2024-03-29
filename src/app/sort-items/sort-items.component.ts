import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ItemFlatListComponent } from '../item-flat-list/item-flat-list.component';
import { ItemListComponent } from '../item-list/item-list.component';
import { FormsModule } from '@angular/forms';
import { ListType } from '../enums';
import {DataStorageService} from "../data-storage.service";


@Component({
  selector: 'app-sort-items',
  standalone: true,
  imports: [CommonModule, MaterialModule, ItemFlatListComponent, ItemListComponent, FormsModule],
  templateUrl: './sort-items.component.html',
  styleUrls: ['./sort-items.component.css']
})
export class SortItemsComponent implements OnInit {
  sortType: string;
  enum: typeof ListType = ListType;

  constructor(private dsService: DataStorageService) {
  }

  ngOnInit(): void {
    this.sortType = ListType.gridList
    this.dsService.fetchItems().subscribe();
  }

  trolo(){
    if(true){
      console.log("sds")
    }
  }
}
