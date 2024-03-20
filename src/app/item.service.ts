import { Injectable } from '@angular/core';
import { Item } from './shared/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items : Item[] = [
    new Item ('Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    'producent',
    50,
    50),
    new Item ('Nazwa',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    'producent',
    50,
    50),
    new Item ('Nazwa2',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    'producent',
    50,
    50),
    new Item ('Nazwa3',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    'producent',
    50,
    50),
    new Item ('Nazwa4',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    'producent',
    50,
    50),
    new Item ('Nazwa4',
    'Opis',
    'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
    '500g',
    'producent',
    50,
    50),   
]
  constructor() { }
}
