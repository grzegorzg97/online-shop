import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ItemFlatListComponent } from './item-flat-list/item-flat-list.component';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ItemFlatComponent } from './item-flat/item-flat.component';
import { AuthComponent } from './auth/auth.component';
import { AlertComponent } from './shared/alert/alert.component';
import { PlaceholderDirective } from './shared/placeholder/placeholder.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { SortItemsComponent } from './sort-items/sort-items.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AuthInterceptorService } from './auth/auth.interceptor.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderComponent,
    ItemListComponent,
    LogoComponent,
    FooterComponent,
    NewsletterComponent,
    ItemFlatListComponent,
    MaterialModule,
    FormsModule,
    ItemDetailsComponent,
    ItemFlatComponent,
    AuthComponent,
    AlertComponent,
    PlaceholderDirective,
    HttpClientModule,
    LoadingSpinnerComponent,
    SortItemsComponent,
    ShoppingCartComponent
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
