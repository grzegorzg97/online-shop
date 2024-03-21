import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-item-flat',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './item-flat.component.html',
  styleUrls: ['./item-flat.component.css']
})
export class ItemFlatComponent {
  @Input() item: Item
}
