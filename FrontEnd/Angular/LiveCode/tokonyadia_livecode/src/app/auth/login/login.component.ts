import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import Swal from "sweetalert2";
import {UserRequest} from "../model/user-request.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private readonly service: AuthService,
              private readonly router: Router) {
  }

  onLogin(data: UserRequest): void {
    console.log("LOGIN REQUEST :", data)
    this.service.login(data).subscribe({
      next: (res) => {
        let token = res.data.token;
        if (token) {
          sessionStorage.setItem("token", token)
        }
        this.router.navigateByUrl("/pages")
      },
      error: (err) => {
        console.log(err)
        Swal.fire('Invalid Username or Password')
      }
    })
  }
}
