import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { LogoComponent } from './logo/logo.component';

/* import { AuthGuard } from './auth/auth.guard'; */



const routes: Routes = [
  {path:'', component:LogoComponent},
  {path: 'login', component: AuthComponent},
  {path: 'details', component: ItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
