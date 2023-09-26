import { Component } from '@angular/core';
import {ProductService} from "../service/product.service";
import {Product} from "../model/product-model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [];
  selectedProductIndex: number | null = null;
  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;
  totalPagesArray: number[] = [];
  constructor(private readonly service: ProductService) {
  }
  onPageButtonClick(pageIndex: number) {
    this.currentPage = pageIndex;
    this.getProducts(this.currentPage);
  }
  getProducts(page: number): void {
    this.service.getProducts(page)
      .subscribe(data => {
        this.products = data.data;
        this.totalPages = data.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i);
      });
  }

}
