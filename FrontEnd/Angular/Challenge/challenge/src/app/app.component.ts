import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge';
  account = {
    email: '',
    password: '',
    isLogin: false
  }

  handleLoginEvent(event: any) {
    this.account = event
    console.log(this.account)
  }
}
