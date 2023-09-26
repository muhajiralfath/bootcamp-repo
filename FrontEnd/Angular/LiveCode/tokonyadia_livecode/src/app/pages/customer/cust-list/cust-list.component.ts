import {Component} from '@angular/core';
import {Customer} from "../model/customer-model";
import {CustomerService} from "../service/customer.service";

@Component({
  selector: 'app-cust-list',
  templateUrl: './cust-list.component.html',
  styleUrls: ['./cust-list.component.css']
})
export class CustListComponent {
  customer: Customer[] = []
  selectedProductIndex: number | null = null;

  constructor(private readonly service: CustomerService) {
  }

  currentPage: number = 1;
  pageSize: number = 5;
  totalPages: number = 1;
  totalPagesArray: number[] = [];

  ngOnInit(){
    this.getCustomers(this.currentPage)
  }

  onPageButtonClick(pageIndex: number) {
    this.currentPage = pageIndex;
    this.getCustomers(this.currentPage);
  }

  getCustomers(page: number): void {
    this.service.getCustomers(page)
      .subscribe(data => {
        this.customer = data.data;
        this.totalPages = data.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i);
      });
  }
}
