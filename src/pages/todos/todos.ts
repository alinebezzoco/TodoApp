import { Todo } from './todo.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html'
})

export class Todos implements OnInit {
    todoList: Array<Todo> = new Array<Todo>();

    constructor() { }

    ngOnInit() {
        let savedTodos = localStorage.getItem("todos-list");
        if (savedTodos) {
            this.todoList = JSON.parse(savedTodos);
        }
    }

    add() {
        let title = prompt("Criar novo lembrete");
        if (title) {
            this.todoList.push(new Todo(title));
            this.save();
        }
    }

    edit(todo: Todo) {
        let title = prompt("Editar lembrete", todo.title);
        if (title && title != todo.title) {
            todo.title = title;
            this.save();
        }
    }

    delete(index: number) {
        this.todoList.splice(index, 1);
        this.save();
    }

    toggleStatus(todo: Todo) {
        todo.completed = !todo.completed;
        this.save();
    }

    save() {
        localStorage.setItem("todos-list", JSON.stringify(this.todoList));
    }

}
