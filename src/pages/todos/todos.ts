import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Add } from "../add/add";

@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})
export class Todos {
  
  public todoList: Array<string>; 

  constructor(private navCtrl: NavController, public navParams: NavParams, public loading: LoadingController) {
  }

ionViewDidEnter() {
  let loader = this.loading.create({
    content: 'Getting latest entries...',
  });

  loader.present().then(() => {
     this.todoList = JSON.parse(localStorage.getItem("todos"));
    if(!this.todoList) { 
      this.todoList = [];
      console.log("chegou aqui")
    }
    loader.dismiss();
  });
}
    

  delete(index: number) { 
    this.todoList.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todoList));
  }

  add() { 
    this.navCtrl.push(Add);
  }

}
