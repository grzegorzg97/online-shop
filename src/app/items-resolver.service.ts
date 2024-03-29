import { Injectable, inject } from '@angular/core';
import { ItemService } from './item.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { Item } from './shared/item.model';



@Injectable({
  providedIn: 'root'
})
export class ItemsResolverService {

  constructor(private itemService: ItemService) {}
 
}
export const itemResolver: ResolveFn <Item> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) =>
  {

  }

