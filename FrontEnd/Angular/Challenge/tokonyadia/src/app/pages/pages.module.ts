import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagesRoutingModule} from './pages-routing.module';
import {HomeComponent} from "./home/home.component";
import {ProductFormComponent} from "./product/product-form/product-form.component";
import {CustomerFormComponent} from "./customer/customer-form/customer-form.component";
import {TransactionComponent} from './transaction/transaction/transaction.component';
import {SidebarComponent} from "../shared/component/sidebar/sidebar.component";
import {ProductListComponent} from "./product/product-list/product-list.component";
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {NavbarComponent} from "../shared/component/navbar/navbar.component";
import {FooterComponent} from "../shared/component/footer/footer.component";
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
    declarations: [
        HomeComponent,
        CustomerFormComponent,
        ProductFormComponent,
        TransactionComponent,
        SidebarComponent,
        ProductListComponent,
        CustomerListComponent,
        NavbarComponent,
        FooterComponent,
        DashboardComponent
    ],
    imports: [
        CommonModule,
        PagesRoutingModule
    ]
})
export class PagesModule {
}
