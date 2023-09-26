import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output()
  loginEvent = new EventEmitter<{}>()

  adminAccount = {
    email: "admin@gmail.com",
    password: "123456"
  }

  account = {
    email: "",
    password: "",
    isLogin : false
  }

  onEmail(email : any){
    this.account.email = email.target.value
  }

  onPassword(password: any){
    this.account.password = password.target.value
  }

  login() {
    if (this.account.email === this.adminAccount.email
      && this.account.password === this.adminAccount.password) {
      this.account.isLogin = true
      console.log(this.account.isLogin)

      this.loginEvent.emit(this.account)
    } else {
      alert('incorrect email or password!')
    }
  }
}
