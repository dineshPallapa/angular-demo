import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';

import { TodosComponent } from './todos.component';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { reducer } from './prodduct.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'todos', component: TodosComponent },
      { path: 'todo/:id', component: TodoDetailComponent },
    ]),
    StoreModule.forFeature('todo', reducer)
  ],
  declarations: [
    TodosComponent,
    TodoDetailComponent,
  ]
})
export class TodoModule { }
