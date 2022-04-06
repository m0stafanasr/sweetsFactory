import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Home', component:HomeComponent},
  {path:'products', component:ProductsComponent},
  {path:'product/:id', component:ProductDetailsComponent},
  {path:'services', component:ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
