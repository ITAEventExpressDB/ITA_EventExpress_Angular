import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactAdminFormService {
  url = 'http://localhost:3000/api/ContactAdmin';

  constructor(private http: HttpClient) {}

  allMessagesForAdmins() {
    return this.http.get(`${this.url}/All`);
  }

  messageById(messageId: string) {
    return this.http.get(`${this.url}/${messageId}`);
  }

  editAdmin(messageId: string, data: any) {
    return this.http.patch(`${this.url}/${messageId}/UpdateStatus`, data);
  }

  addContactAdmin(data: any) {
    return this.http.post(`${this.url}/AddContactAdmin`, data);
  }

  deleteAdmin(id: string) {
    return this.http.delete(`${this.url}/DeleteContactAdmin/${id}`);
  }
}
