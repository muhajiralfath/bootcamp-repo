import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CustFormComponent } from './customer/cust-form/cust-form.component';
import { CustListComponent } from './customer/cust-list/cust-list.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { StoreFormComponent } from './store/store-form/store-form.component';
import { StoreListComponent } from './store/store-list/store-list.component';
import { TrancListComponent } from './transaction/tranc-list/tranc-list.component';
import {FooterComponent} from "../shared/component/footer/footer.component";


@NgModule({
  declarations: [
    HomeComponent,
    CustFormComponent,
    CustListComponent,
    ProductFormComponent,
    ProductListComponent,
    StoreFormComponent,
    StoreListComponent,
    TrancListComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
