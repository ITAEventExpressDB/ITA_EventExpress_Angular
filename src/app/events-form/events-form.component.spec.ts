import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsFormComponent } from './events-form.component';

describe('EventsFormComponent', () => {
  let component: EventsFormComponent;
  let fixture: ComponentFixture<EventsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
