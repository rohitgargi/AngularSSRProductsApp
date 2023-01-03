import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { IProduct } from '../products/models/IProduct';
import { CommonHttpService } from '../shared/common-http.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  selectedProdId!: string;
  productDetail!:IProduct
  loading:boolean = false;

  constructor(private activatedRoute: ActivatedRoute, private httpService: CommonHttpService) { }

  ngOnInit(): void {
    this.selectedProdId = this.activatedRoute.snapshot.paramMap.get('id') || '';
    console.log(this.selectedProdId);

    this.loadProduct();

   
  }

  loadProduct(){
    this.loading = true;
    this.httpService.getProductDetail(this.selectedProdId).subscribe((productDetail)=>{
      this.productDetail = productDetail;
      this.loading = false;
    })
  }



}
