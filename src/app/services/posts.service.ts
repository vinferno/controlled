import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
private _posts: Post[]=[];
  constructor(private http: HttpClient) {
    this.getPosts();
  }

  get posts() {
    return this._posts;
  }

  getPosts() {
    console.log('get posts');
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
    .subscribe(data=>this._posts = data)
  }
}
