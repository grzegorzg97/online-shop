import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemService } from './item.service';
import { Item } from './shared/item.model';
import { map, tap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private http: HttpClient, private itemService: ItemService) { }

  storeItems(){
    const items = this.itemService.getItems();
    this.http.put('https://online-shop-db-e1dbc-default-rtdb.europe-west1.firebasedatabase.app/items.json', items)
    .subscribe(response => {
      console.log(response);
    })
  }
  fetchItems(){
    return this.http.get<Item[]>(
      'https://online-shop-db-e1dbc-default-rtdb.europe-west1.firebasedatabase.app/items.json',)
    .pipe(
      map(items => {
        return items.map(item => {
          return {
            ...item
          }
        });
      }),
      tap(items => {
        this.itemService.setItems(items)
      })
    )
  }
}

