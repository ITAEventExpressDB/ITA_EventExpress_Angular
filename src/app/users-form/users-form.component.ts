import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss'],
})
export class UsersFormComponent implements OnInit {
  title = 'Add';
  users: any;
  router = 'users';
  editing = { val: false, title: 'Add', id: '' };

  constructor(private user: UsersService) {
    this.getUsers();
  }

  cancel() {
    this.editing = { val: false, title: 'Add', id: '' };
  }

  getUsers() {
    this.user.getData().subscribe((data) => {
      this.users = data;
    });
  }

  getUserFormData(data: any) {
    (this.editing.val
      ? this.user.editUser(this.editing.id, data)
      : this.user.addUser(data)
    ).subscribe(() => {
      this.getUsers();
      this.cancel();
    });
  }

  deleteUser(id: string) {
    this.user.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }

  editUsername(id: string) {
    this.editing = { val: true, title: 'Edit', id };
  }

  ngOnInit(): void {}
}
