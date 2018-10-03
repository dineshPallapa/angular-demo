import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Todo } from '../todos/todo';
import { TodoService } from '../services/todo/todo.service'

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})

export class TodoDetailComponent implements OnInit {
  pageTitle="data"
  @Input() todo: Todo;
  @Input() todos: Todo[];
  @Output() detailsClicked: EventEmitter<Todo> = new EventEmitter<Todo>();

  constructor(todoService: TodoService, private route: ActivatedRoute) {
    this.todos = todoService.getTodos();
  }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id')
    console.log(id)
    this.pageTitle += `:${id} Todo`
    this.todo = this.todos[0]
  }

  onClick():void {
    this.detailsClicked.emit(this.todo)
  }
}
