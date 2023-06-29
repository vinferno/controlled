import { Component, OnInit,Input } from '@angular/core';
import {UsersService} from 'src/app/services/users.service';

@Component({
  selector: 'app-display-user-by-id',
  templateUrl: './display-user-by-id.component.html',
  styleUrls: ['./display-user-by-id.component.scss']
})
export class DisplayUserByIdComponent implements OnInit {
@Input() public userId!:number;
  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }
  getUserById(){

    return this.usersService.users.find((user)=>this.userId===user.id);
  }

}
