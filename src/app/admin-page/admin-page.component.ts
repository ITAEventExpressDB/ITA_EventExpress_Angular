import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  userIdInput = '';
  unblockInput = '';
  blockInput = '';

  onSubmit(data: any) {
    const { userID, blockDecide } = data;
    if (!userID || !blockDecide) {
      alert('You must write userID and block or unblock');
      return;
    }

    this.http
      .patch<any>(
        `http://localhost:3000/api/account/${userID}/${blockDecide}`,
        {}
      )
      .subscribe((data) => {
        console.log(data);
        this.userIdInput = '';
        this.unblockInput = '';
        this.blockInput = '';
        alert(`Succes ${blockDecide} user.`);
      });
  }
}
