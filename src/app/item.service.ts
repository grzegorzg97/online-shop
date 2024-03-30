import { Injectable } from '@angular/core';
import {Item, Producer} from './shared/item.model';
import { Subject, max } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  maxItemsPerPage: 5;
  itemsChanged = new Subject<Item[]>();

  items : Item[] = [
     new Item (0, 'Białko', 'to produkt oparty na trzech wysokiej jakości surowcach...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "KFD"),
      new Item (1, 'Kreatyna', 'opis kreatyny...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '1000g', 100, 10 , "KFD"),
      new Item (2, 'Cyrulina', 'opis cyruliny...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 40, 8 , "KFD"),
      new Item (3, 'Witaminy', 'opis witamin...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 50, 15 , "KFD"),
      new Item (4, 'Minerały', 'opis minerałów...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "KFD"),
      new Item (5, 'Białko', 'to produkt oparty na trzech wysokiej jakości surowcach...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 50, 10 , "Olimp"),
      new Item (6, 'Kreatyna', 'opis kreatyny...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '1000g', 100, 10 , "Olimp"),
      new Item (7, 'Cyrulina', 'opis cyruliny...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "Olimp"),
      new Item (8, 'Witaminy', 'opis witamin...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "Olimp"),
      new Item (9, 'Minerały', 'opis minerałów...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "Olimp"),
      new Item (10, 'Białko', 'to produkt oparty na trzech wysokiej jakości surowcach...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "MyVita"),
      new Item (11, 'Kreatyna', 'opis kreatyny...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '1000g', 100, 10 , "MyVita"),
      new Item (12, 'Cyrulina', 'opis cyruliny...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "MyVita"),
      new Item (13, 'Witaminy', 'opis witamin...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "MyVita"),
      new Item (14, 'Minerały', 'opis minerałów...',
      'https://sklep.kfd.pl/9675-medium_default/kfd-pure-wpc-82-instant-700-g-bialko-serwatkowe-naturalne.jpg',
      '500g', 80, 20 , "MyVita"),
     
]



  producer: Producer = {name: "KFD", items: this.items};

  producer2: Producer = {name: "Olimp", items: this.items};

  producer3: Producer = {name: "MyVita", items: this.items};

  producers: Producer[] = [this.producer, this.producer2, this.producer3]

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
