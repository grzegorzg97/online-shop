import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item-list/item/item.component';
import { LogoComponent } from './logo/logo.component';
import { ItemFlatComponent } from './item-list/item-flat/item-flat.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    ItemComponent,
    ItemListComponent,
    LogoComponent,
    ItemFlatComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
