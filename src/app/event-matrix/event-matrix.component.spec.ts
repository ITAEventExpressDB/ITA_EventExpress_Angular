import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventMatrixComponent } from './event-matrix.component';

describe('EventMatrixComponent', () => {
  let component: EventMatrixComponent;
  let fixture: ComponentFixture<EventMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventMatrixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
