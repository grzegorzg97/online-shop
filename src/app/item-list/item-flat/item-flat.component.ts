import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';

@Component({
  selector: 'app-item-flat',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './item-flat.component.html',
  styleUrls: ['./item-flat.component.css']
})
export class ItemFlatComponent {

}
