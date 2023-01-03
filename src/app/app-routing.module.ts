import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { ProductsModule } from './products/products.module';

const routes: Routes = [{
  path:'home',
  component:LandingComponent
},{
  path:'products',
  loadChildren: () => import('./products/products.module').then(m=>m.ProductsModule)
},
{
  path:'product/:id',
  loadChildren: () => import('./product-details/product-details.module').then(m=>m.ProductDetailsModule)
},
{path: '', redirectTo: '/home', pathMatch: 'full'},
{
  path: "**",
  redirectTo: ""
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
