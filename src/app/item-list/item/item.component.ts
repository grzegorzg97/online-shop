import { Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  standalone: true,
  imports: [MaterialModule]
})
export class ItemComponent {
 
}
