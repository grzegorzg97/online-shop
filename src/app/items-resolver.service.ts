import { Injectable, inject } from '@angular/core';
import { ItemService } from './item.service';
import { ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Item } from './shared/item.model';
import { DataStorageService } from './data-storage.service';
import { Observable } from 'rxjs';

/* TO GOWNO NIE DZIALA
IF NA PROMOCJE
PAGINACJE
DODAC DO KOSZYKA
ZEBY ZOSTAWALY PRZY ODSWIEZENIU */

@Injectable({
  providedIn: 'root'
})
export class ItemsResolverService implements Resolve<Item[]>{

  constructor(private dsService:DataStorageService, private itemService: ItemService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const items = this.itemService.getItems();
    if(items.length === 0) {
      return this.dsService.fetchItems();
    } else {
      return items;
    }
  }

}


