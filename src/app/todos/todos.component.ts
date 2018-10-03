import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store'

import { Todo } from './todo';
import { TodoService } from '../services/todo/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  pageTitle = "Task List"
  status: any;
  fin: string;
  todos: Todo[];
  selectedTodo: Todo;

  constructor(private store: Store<any>, private todoService: TodoService) {
    this.todos = todoService.getTodos();
  }

  ngOnInit() {
    this.todoService.getUsers().subscribe(
      status => this.status = status
    )
    this.status = this.status
    this.store.pipe(select('todo')).subscribe(
      todo => {
        if(todo) {
          this.fin = todo.showId
          console.log(this.fin)
        }
      }
    );
  }

  toUpdate(todo: Todo): void {
    this.store.dispatch({
      type: 'TOGGLE_TODO_ID',
      payload: todo
    });
    this.selectedTodo = todo;
  }

  onDetailsClicked(message: Todo) {
    this.pageTitle = `Selected Task ${message.task}`
  }
}
