import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailsRoutingModule } from './product-details-routing.module';
import { ProductDetailsComponent } from './product-details.component';
import { CommonHttpService } from '../shared/common-http.service';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from '../shared/components/spinner/spinner.component';


@NgModule({
  declarations: [
    ProductDetailsComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    HttpClientModule
  ],
  providers:[CommonHttpService],
  exports:[SpinnerComponent]
})
export class ProductDetailsModule { }
