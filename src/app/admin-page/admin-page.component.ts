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

  onSubmit(data: any) {
    const { userID, blockDecide } = data;
    if (!userID || !blockDecide) {
      alert('You must write userID and block or unblock');
      return;
    }

    if (blockDecide === 'block') {
      this.service.blockUser(userID).subscribe(() => {
        this.userIdInput = '';
        this.blockDecide = 'unblock';
        alert('User blocked.');
        return;
      });
    } else {
      this.service.unblockUser(userID).subscribe(() => {
        this.userIdInput = '';
        this.blockDecide = 'unblock';
        alert('User unblocked.');
        return;
      });
    }
  }
}
