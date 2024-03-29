import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LogoComponent } from './logo/logo.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SortItemsComponent } from './sort-items/sort-items.component';
import { ItemsResolverService } from './items-resolver.service';





const routes: Routes = [
  {path:'', component:SortItemsComponent},
  {path: 'items/:id/details', component:ItemDetailsComponent, /* resolve: ItemsResolverService */},
  {path: 'sort', component: SortItemsComponent},
  {path: 'login', component: AuthComponent},
  {path: 'cart', component:ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
