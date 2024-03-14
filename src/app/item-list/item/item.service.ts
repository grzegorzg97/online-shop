import { Injectable } from "@angular/core";
import { Item } from "./item.model"

@Injectable()
export class ItemService {

    items : Item[] = [
        new Item ('Nazwa',
        'Opis',
        'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
        'kolor',
        'producent',
        12),
        new Item ('Nazwa',
        'Opis',
        'https://img.freepik.com/premium-zdjecie/osiol-z-bialym-tlem-i-bialym-tlem_873925-22917.jpg',
        'kolor',
        'producent',
        12)
    ]
}