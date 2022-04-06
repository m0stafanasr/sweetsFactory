import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    NavBarComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
