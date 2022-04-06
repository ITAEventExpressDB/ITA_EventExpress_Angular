import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin-form.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss'],
})
export class AdminPageComponent implements OnInit {
  constructor(private service: AdminService) {}

  ngOnInit(): void {}

  userIdInput = '';
  blockDecide = 'unblock';
  adminMessage = '';
  timeout: any;

  onSubmit(data: any) {
    const { userID, blockDecide } = data;
    if (!userID || !blockDecide) {
      clearTimeout(this.timeout);
      this.adminMessage = 'You must write userID and block or unblock';
      this.timeout = setTimeout(() => {
        this.adminMessage = '';
      }, 3000);
      return;
    }

    if (blockDecide === 'block') {
      this.service.blockUser(userID).subscribe(() => {
        clearTimeout(this.timeout);
        this.userIdInput = '';
        this.blockDecide = 'unblock';
        this.adminMessage = 'User blocked.';
        this.timeout = setTimeout(() => {
          this.adminMessage = '';
        }, 3000);
        return;
      });
    } else {
      this.service.unblockUser(userID).subscribe(() => {
        clearTimeout(this.timeout);
        this.userIdInput = '';
        this.blockDecide = 'unblock';
        this.adminMessage = 'User unblocked.';
        this.timeout = setTimeout(() => {
          this.adminMessage = '';
        }, 3000);
        return;
      });
    }
  }
}
