import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFormService {
  url = 'http://127.0.0.1:3000/api/Category';

  constructor(private http: HttpClient) {}


  allCategories() {
    return this.http.get(`${this.url}/All`);
  }

  categoriesByGroup(groupId: string) {
    return this.http.get(`${this.url}/All/${groupId}`);
  }

  createCategory(data: any) {
    return this.http.post(`${this.url}/Create`, data);
  }

  editCategory(id: string, data: any) {
    return this.http.patch(`${this.url}/Edit/${id}`, data);
  }

  deleteCategory(id: string) {
    return this.http.delete(`${this.url}/Delete/${id}`);
  }

}
