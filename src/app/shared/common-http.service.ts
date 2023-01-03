import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { IProduct } from "../products/models/IProduct";


@Injectable()
export class CommonHttpService{

    constructor(private http: HttpClient){

    }
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(environment.serverUrl+'/products');
    }

    getProductDetail(productId:string):Observable<IProduct>{
        return this.http.get<IProduct>(environment.serverUrl+'/products/'+productId)
    }

}
