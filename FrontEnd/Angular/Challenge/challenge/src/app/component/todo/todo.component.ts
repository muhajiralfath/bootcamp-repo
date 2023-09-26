import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input()
  account = {
    email: '',
    password: '',
    isLogin: false
  }


  list: {title: string; desc: string; isDone: boolean}[] = []
  taskTitle:string = ""
  taskDesc: string = ""

  addTask(){
    if (this.taskTitle && this.taskDesc){
      this.list.push({title: this.taskTitle, desc: this.taskDesc, isDone : false})
      this.taskTitle = ""
      this.taskDesc = ""
    }
  }
  toggleDone(list: {title: string; desc: string; isDone: boolean}){
    list.isDone = !list.isDone
  }

  delete(index: number){
    this.list.splice(index, 1)
  }

  logout(){
    this.account.isLogin = false
  }

}
