import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './component/todo/todo.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './component/login/login.component';
import { FormComponent } from './component/form-list-directory/form/form.component';
import { ListComponent } from './component/form-list-directory/list/list.component';
import { ForbiddenValidatorDirective } from './shared/util/forbidden-name.directive';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    LoginComponent,
    FormComponent,
    ListComponent,
    ForbiddenValidatorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
