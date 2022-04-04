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
    this.user.getData(this.router, '').subscribe((data) => {
      this.users = data;
    });
  }

  getUserFormData(data: any) {
    (this.editing.val
      ? this.user.editUnit(this.router, 'EditUsername', this.editing.id, data)
      : this.user.addUser(this.router, 'AddUser', data)
    ).subscribe(() => {
      this.getUsers();
      this.cancel();
    });
  }

  deleteUser(id: string) {
    this.user.deleteElement(this.router, 'DeleteUser', id).subscribe(() => {
      this.getUsers();
    });
  }

  editUsername(id: string) {
    this.editing = { val: true, title: 'Edit', id };
  }

  ngOnInit(): void {}
}
