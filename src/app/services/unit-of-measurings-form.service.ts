import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitOfMeasuringsFormService {
  url = 'http://localhost:3000/api/UnitOfMeasuring';

  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(`${this.url}`);
  }

  addUser(data: any) {
    return this.http.post(`${this.url}/AddUser`, data);
  }

  editUser(id: string, data: any) {
    return this.http.patch(`${this.url}/EditUsername/${id}`, data);
  }

  deleteUser(id: string) {
    return this.http.delete(`${this.url}/DeleteUser/${id}`);
  }
}
