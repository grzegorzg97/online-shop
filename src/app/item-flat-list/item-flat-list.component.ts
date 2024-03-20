import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';


@Component({
  selector: 'app-item-flat-list',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './item-flat-list.component.html',
  styleUrls: ['./item-flat-list.component.css']
})
export class ItemFlatListComponent {

}
