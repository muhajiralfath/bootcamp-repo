import {Component} from '@angular/core';
import {StoreService} from "../service/store.service";
import {Seller} from "../model/store.model";

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  seller: Seller[] = [];
  selectedProductIndex: number | null = null;

  currentPage: number = 0;
  pageSize: number = 5;
  totalPages: number = 0;
  totalPagesArray: number[] = [];

  constructor(private readonly service: StoreService) {
  }
  onPageButtonClick(pageIndex: number) {
    this.currentPage = pageIndex;
    this.getStore(this.currentPage);
  }

  getStore(page: number): void {
    this.service.getStore(page)
      .subscribe(data => {
        this.seller = data.data;
        this.totalPages = data.totalPages;
        this.totalPagesArray = Array.from({ length: this.totalPages }, (_, i) => i);
      });
  }
}
