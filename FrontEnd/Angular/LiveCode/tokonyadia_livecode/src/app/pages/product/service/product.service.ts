import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponsePageWrapper} from "../../../shared/model/page-response-wrapper";
import {Product} from "../model/product-model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private readonly http: HttpClient) { }

  getProducts(currentPage: number): Observable<ResponsePageWrapper<Product>> {
    const params = new HttpParams()
      .set('page', currentPage);
    return this.http.get<any>('api/products', {params});
  }
}
