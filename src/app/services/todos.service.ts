import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Todo} from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private _todos: Todo[] = [];
  constructor(private http: HttpClient) { this.getTodos() }

  get todos() {
    return this._todos;
  }
  set todos(todos) {
    this._todos = todos;
  }
  getTodos() {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos').subscribe( data => {
      this.todos = data;
    })
  }

}
