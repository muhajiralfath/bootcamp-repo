import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../service/auth.service";
import {UserRequest} from "../model/user-request.model";
import Swal from "sweetalert2";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formRegist! : FormGroup

  constructor(private http : HttpClient,
              private router : Router,
              private service : AuthService,
              private formBuilder : FormBuilder,) {
  }

  form(property : string) : FormGroup {
    return this.formRegist.get(property) as FormGroup
  }

  ngOnInit() : void {
    this.formRegist = this.formBuilder.group({
      email : ['', Validators.required],
      password : ['', Validators.required]
    })
  }

  register(data : UserRequest) {
    this.service.register(data).subscribe(res => {
      Swal.fire({
        icon: 'success',
        title: 'Register successfull',
        showConfirmButton: false,
        timer: 1500
      })
      this.formRegist.reset()
      this.router.navigate([''])
    }, err => {
      alert('Something went wrong')
    })
  }
}
