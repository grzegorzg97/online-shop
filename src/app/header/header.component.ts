import {Component, Input} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Item } from '../shared/item.model';
import { ItemService } from '../item.service';
import { AuthService } from '../auth/auth.service';
import { Subscription } from 'rxjs'


@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule, CommonModule],
})
export class HeaderComponent {

  @Input() items: Item;
  isAuthenticated = false;
  private userSub: Subscription;

  constructor ( public authService: AuthService, public itemService:ItemService) {}

  ngOnInit() {
      this.userSub = this.authService.user.subscribe(user =>{
      this.isAuthenticated = !!user ;
      });
  }
  onLogout(){
      this.authService.logout();
  }
  
  ngOnDestroy(){
      this.userSub.unsubscribe();
  }
}
