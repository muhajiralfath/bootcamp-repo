import {Component, Input, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ListComponent} from "../list/list.component";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @ViewChild(ListComponent) listComponent!: ListComponent;
  @Input()
  account = {
    email: '',
    password: '',
    isLogin: false
  }

  animeForm : FormGroup = new FormGroup({
    id : new FormControl(null),
    name: new FormControl(null, [Validators.required, Validators.pattern(/\d+/)]),
    cover: new FormControl(null, [Validators.required, Validators.minLength(10)]),
  })

  animes: any[] = []

  submitData(data: any){
    console.log(data)
    this.animes.push(data)
  }

  form(property: string): FormGroup{
    return  this.animeForm.get(property) as FormGroup
  }
  logout(){
    this.account.isLogin = false
  }
}
