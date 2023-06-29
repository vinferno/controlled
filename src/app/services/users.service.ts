import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private _users: User [] = [];
  constructor(private http: HttpClient) {
    this.getUsers();
  }

  get users() {
    return this._users;
  }

  getUsers() {
    this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    .subscribe(data => {this._users = data; console.log(data)})
  }

  getById(userId: number) {
    return this.users.find(user => user.id === userId)
  }
}
