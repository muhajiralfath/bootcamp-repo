import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerFormComponent} from "./customer/customer-form/customer-form.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";
import {TransactionComponent} from "./transaction/transaction/transaction.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "", component: HomeComponent, children: [
      {path: "dashboard", component: DashboardComponent},
      {path: "customer-form", component: CustomerFormComponent},
      {path: "customer-list", component: CustomerListComponent},
      {path: "product-form", component: ProductFormComponent},
      {path: "product-list", component: ProductListComponent},
      {path: "transaction", component: TransactionComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
