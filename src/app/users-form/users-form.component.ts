import { Component, OnInit } from '@angular/core';
import {UsersService} from '../services/users.service'

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})


export class UsersFormComponent implements OnInit {
  users:any;

  constructor(private user:UsersService) { 
	this.user.getData("users", "").subscribe(data => {
		this.users=data;
	})
  }
  getUserFormData(data:any) {
	this.user.addUser("users", "AddUser", data).subscribe(result => {
		console.log(result);
	})
  }
  ngOnInit(): void {
  }

}
