import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonHttpService } from '../shared/common-http.service';
import { IProduct } from './models/IProduct';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]> | undefined;

  constructor(private httpService: CommonHttpService, private route: Router) { }

  ngOnInit(): void {
    this.reload();
  }

  reload(){
    this.products$ = this.httpService.getProducts();
  }

  redirectToProductDetail(item: IProduct){
    this.route.navigateByUrl('/product/'+item.id);
  }

}
