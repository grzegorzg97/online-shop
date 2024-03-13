import { Component } from '@angular/core';

import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  standalone: true,
  imports: [MaterialModule]
})
export class ItemListComponent {

}
