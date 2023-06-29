import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';


@Component({
  selector: 'app-posts-by-users',
  templateUrl: './posts-by-users.component.html',
  styleUrls: ['./posts-by-users.component.scss']
})
export class PostsByUsersComponent implements OnInit {
  @Input() public userId!: number;
  constructor(private postsServices: PostsService) { }

  ngOnInit(): void {

  }
  getPosts() {
    return this.postsServices.posts.filter(data=> {
      return data.userId === this.userId
    })
  }

}
