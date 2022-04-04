import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UnitOfMeasuringsFormService {
  url = 'http://localhost:3000/api/UnitOfMeasuring';

  constructor(private http: HttpClient) {}

  getUnits() {
    return this.http.get(`${this.url}/All`);
  }

  createUnit(data: any) {
    return this.http.post(`${this.url}/Create`, data);
  }

  editUnit(id: string, data: any) {
    return this.http.patch(`${this.url}/Edit/${id}`, data);
  }

  deleteUnit(id: string) {
    return this.http.delete(`${this.url}/Delete/${id}`);
  }
}
