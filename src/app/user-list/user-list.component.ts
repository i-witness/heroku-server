import { Component, OnInit } from '@angular/core';
import { User } from 'src/data/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  userList: User[];
  selectedUser: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers().then((users: User[]) => {
      console.log('got users', users);
      this.userList = users;
    });
  }

  selectUser(user: User) {
    this.selectedUser = user;
  }

  createNewUser() {
    var user: User = {
      email: '',
    };
    // By default, a newly-created user will have the selected state.
    this.selectUser(user);
  }

  addUser = (user: User) => {
    this.userList.push(user);
    this.selectUser(user);
    return this.userList;
  };
}
