import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustFormComponent} from "./customer/cust-form/cust-form.component";
import {CustListComponent} from "./customer/cust-list/cust-list.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {StoreFormComponent} from "./store/store-form/store-form.component";
import {StoreListComponent} from "./store/store-list/store-list.component";
import {TrancListComponent} from "./transaction/tranc-list/tranc-list.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent,children: [
      {path: "customer-form", component: CustFormComponent},
      {path: "customer-list", component: CustListComponent},
      {path: "product-form", component: ProductFormComponent},
      {path: "product-list", component: ProductListComponent},
      {path: "store-form", component: StoreFormComponent},
      {path: "store-list", component: StoreListComponent},
      {path: "transaction", component: TrancListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
