import { Component, } from '@angular/core';

import { MaterialModule } from '../material.module';
import { ItemComponent } from './item/item.component';
import { CommonModule } from '@angular/common';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [MaterialModule, ItemComponent, CommonModule]
})
export class ItemListComponent {
  
  items : Item[] = [
    new Item ('Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    'kolor',
    12,[

    ]),
    new Item ('Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    'kolor',
    12,[
      
    ])
]


}
