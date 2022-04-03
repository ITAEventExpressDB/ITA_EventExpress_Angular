import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service'
@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  users:any;
  constructor(private user:UsersService) { 
	this.user.getData().subscribe(data => {
		this.users=data;
	})
  }

  ngOnInit(): void {
  }

}
