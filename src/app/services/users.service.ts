import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  getData(router: string, method: string) {
    return this.http.get(`${this.url}/${router}/${method}`);
  }

  addUser(router: string, method: string, data: any) {
    return this.http.post(`${this.url}/${router}/${method}`, data);
  }

  editUnit(router: string, method: string, id: string, data: any) {
    return this.http.patch(`${this.url}/${router}/${method}/${id}`, data);
  }

  deleteElement(router: string, method: string, id: string) {
    return this.http.delete(`${this.url}/${router}/${method}/${id}`);
  }
}
