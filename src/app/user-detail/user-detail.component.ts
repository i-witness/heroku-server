import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/data/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})
export class UserDetailComponent {
  @Input()
  user: User;

  @Input()
  createHandler: Function;

  constructor(private userService: UserService) {}

  // createUser(user: User) {
  //   this.userService.createUser(user).then((newUser: User) => {
  //     this.createHandler(newUser);
  //   });
  // }
}
