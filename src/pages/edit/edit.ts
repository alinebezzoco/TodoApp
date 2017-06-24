import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html'
})
export class Edit {

  public todoList: Array<string>;
  public todoItem: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
    if(!this.todoList) { 
      this.todoList = [];
    }
    this.todoItem = "";
  }

  save() { 
    if(this.todoItem != "") { 
      this.todoList.push(this.todoItem);
      localStorage.setItem("todos", JSON.stringify(this.todoList));
      this.navCtrl.pop();
      console.log("salvou")
    }
  }

}
