import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { Item } from '../shared/item.model';



@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
 @Input() item: Item
}
