import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ItemService } from '../item.service';
import { ItemFlatComponent } from '../item-flat/item-flat.component';


@Component({
  selector: 'app-item-flat-list',
  standalone: true,
  imports: [CommonModule, MaterialModule,ItemFlatComponent],
  templateUrl: './item-flat-list.component.html',
  styleUrls: ['./item-flat-list.component.css']
})
export class ItemFlatListComponent {

  constructor(public itemService:ItemService){
  }
}
