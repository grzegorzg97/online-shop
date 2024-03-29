import { Injectable } from '@angular/core';
import { Item } from './shared/item.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsChanged = new Subject<Item[]>();

  items : Item[] = [
    /* new Item (0,'Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    2137,
    17,
    'producent'),
    new Item (1,'Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    50,
    50,
    'producent2'),
    new Item (2,'Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    50,
    50,
    'producent3'),
    new Item (3,'Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    50,
    50,
    'producent4'),
    new Item (4,'Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    2137,
    17,
    'producent'),
    new Item (5,'Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    50,
    50,
    'producent2'), */
]
  constructor() { }

    getItems(){
      return this.items.slice();
    }

    setItems(items:Item[]){
      this.items = items;
      this.itemsChanged.next(this.items.slice())
    }
    getItem(index:number) {
      return this.items[index]
    }

}
