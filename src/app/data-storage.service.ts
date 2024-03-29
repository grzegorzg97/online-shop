import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ItemService } from './item.service';



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
}

