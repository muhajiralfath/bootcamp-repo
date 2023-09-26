import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponsePageWrapper} from "../../../shared/model/page-response-wrapper";
import {Seller} from "../model/store.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private readonly http: HttpClient) { }
  getStore(currentPage: number): Observable<ResponsePageWrapper<Seller>> {
    const params = new HttpParams()
      .set('page', currentPage);
    return this.http.get<any>('api/stores', {params});
  }
}
