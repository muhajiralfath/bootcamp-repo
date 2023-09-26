import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private readonly router: Router
  ) {
  }

  adminAccount: { email: string, password: string } = {
    email: "admin@gmail.com",
    password: "123123"
  }

  account = {
    email: '',
    password: '',
    isLogin: false
  }

  onEmail(email: any): void {
    this.account.email= email.target.value
  }

  onPassword(password: any): void {
    this.account.password = password.target.value
  }

  movetoDashboard(): void {
    this.router.navigateByUrl("/pages/dashboard")
  }

  login():void  {
    if (this.account.email === this.adminAccount.email && this.account.password === this.adminAccount.password){
      this.account.isLogin = true
      this.movetoDashboard()
    } else {
      alert("Please Input Correct Password")
    }
  }



}
