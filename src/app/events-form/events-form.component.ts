
import { Component, OnInit } from '@angular/core';
import { EventsFormService } from '../services/events-form.service';

@Component({
  selector: 'app-events-form',
  templateUrl: './events-form.component.html',
  styleUrls: ['./events-form.component.scss',
  '../../styles/styles.scss',]
})
export class EventsFormComponent implements OnInit {
  title = 'Add';
  events: any;
  router = 'events';
  editing = { val: false, title: 'Add', id: '' };

  constructor(private event: EventsFormService) {
    this.getEvents();
  }

  cancel() {
    this.editing = { val: false, title: 'Add', id: '' };
  }

  getEvents() {
    this.event.getData().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }

  getEventsFormData(data: any) {
    (this.editing.val
      ? this.event.editEvent(this.editing.id, data)
      : this.event.addEvent(data)
    ).subscribe(() => {
      this.getEvents();
      this.cancel();
    });
  }

  deleteEvent(id: string) {
    this.event.deleteEvent(id).subscribe(() => {
      this.getEvents();
    });
  }

  editEvent(id: string) {
    this.editing = { val: true, title: 'Edit', id };
  }

  ngOnInit(): void {
  }

}
