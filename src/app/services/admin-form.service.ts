import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url = 'http://localhost:3000/api/account';

  constructor(private http: HttpClient) {}

  blockUser(userId: string) {
    return this.http.patch(`${this.url}/${userId}/block`, {});
  }

  unblockUser(userId: string) {
    return this.http.patch(`${this.url}/${userId}/unblock`, {});
  }
}
