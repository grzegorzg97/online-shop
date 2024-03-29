import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LogoComponent } from './logo/logo.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SortItemsComponent } from './sort-items/sort-items.component';

/* import { AuthGuard } from './auth/auth.guard'; */



const routes: Routes = [
  {path:'', component:SortItemsComponent},
  {path: 'items/:id/details', component:ItemDetailsComponent},
  {path: 'sort', component: SortItemsComponent},
  {path: 'login', component: AuthComponent},
  {path: 'details', component: ItemDetailsComponent},
  {path: 'cart', component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
