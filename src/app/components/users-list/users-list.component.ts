import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  constructor(
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    console.log('load users')
  }

  get users() {
    return this.userService.users
  }

  goToUser(user: User) {
    this.router.navigate(['user', user.id]);
  }

}
