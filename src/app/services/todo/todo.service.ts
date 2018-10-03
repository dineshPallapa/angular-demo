import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Todo } from '../../todos/todo';
import { Todos } from '../../todos/mock-todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private statusUrl = "http://localhost:3000/status"
  constructor(private http: HttpClient) { }
  getTodos() {
    let subject = new Subject()
    setTimeout(()=>{subject.next(Todos); subject.complete();}, 1000)
    return Todos;
  }
  getUsers(): Observable<any> {
    return this.http.get(this.statusUrl).pipe(
      tap(status => console.log('fetched status'+ JSON.stringify(status))),
      catchError(this.handleError)
    );
  }
  private handleError(err: HttpErrorResponse){
    let errorMessage = '';
    errorMessage = `An error ${err.error.message}`
    return throwError(errorMessage)
  }
}
