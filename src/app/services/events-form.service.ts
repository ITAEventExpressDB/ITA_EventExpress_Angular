import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsFormService {
  url = 'http://localhost:3000/api/events';
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(`${this.url}`);
  }

  getEvent(id: string, data: any) {
    return this.http.get(`${this.url}/${id}`);
  }

  addEvent(data: any) {
      return this.http.post(`${this.url}`, data);
    }
  
    editEvent(id: string, data: any) {
      return this.http.patch(`${this.url}/${id}`, data);
    }
  
    deleteEvent(id: string) {
      return this.http.delete(`${this.url}/${id}/`);
  }
}
