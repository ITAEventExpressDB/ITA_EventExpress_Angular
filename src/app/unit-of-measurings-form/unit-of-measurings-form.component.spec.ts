import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitOfMeasuringsFormComponent } from './unit-of-measurings-form.component';

describe('UnitOfMeasuringsFormComponent', () => {
  let component: UnitOfMeasuringsFormComponent;
  let fixture: ComponentFixture<UnitOfMeasuringsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitOfMeasuringsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitOfMeasuringsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
