import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {ResponsePageWrapper} from "../../../shared/model/page-response-wrapper";
import {Customer} from "../model/customer-model";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private readonly http: HttpClient) { }

  getCustomers(currentPage: number): Observable<ResponsePageWrapper<Customer>>{
    const params = new HttpParams().set('page', currentPage)
    return this.http.get<any>('api/customers', {params});
  }

}
