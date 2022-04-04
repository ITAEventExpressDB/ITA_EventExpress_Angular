import { Component, OnInit } from '@angular/core';
import { UnitOfMeasuringsFormService } from '../services/unit-of-measurings-form.service';

@Component({
  selector: 'app-unit-of-measurings-form',
  templateUrl: './unit-of-measurings-form.component.html',
  styleUrls: [
    './unit-of-measurings-form.component.scss',
    '../../styles/styles.scss',
  ],
})
export class UnitOfMeasuringsFormComponent implements OnInit {
  units: any;
  router = 'UnitOfMeasuring';

  editing = { val: false, title: 'Add', id: '' };
  unitInfo = {
    unitName: null,
    shortName: null,
    categoryId: null,
    isDeleted: null,
  };

  constructor(private service: UnitOfMeasuringsFormService) {
    this.getUnits();
  }

  cancel() {
    this.editing = { val: false, title: 'Add', id: '' };
    this.unitInfo = {
      unitName: null,
      shortName: null,
      categoryId: null,
      isDeleted: null,
    };
  }

  startEdit(event: MouseEvent) {
    const { id } = event.target as HTMLTextAreaElement;
    this.editing = { val: true, title: 'Edit', id };
    for (const unit of this.units) {
      if (unit.id === +id) {
        this.unitInfo = { ...unit, isDeleted: +unit.isDeleted };
        break;
      }
    }
  }

  getUnits() {
    this.service.getData(this.router, 'All').subscribe((data) => {
      this.units = data;
    });
  }

  getUnitFormData(data: any) {
    (this.editing.val
      ? this.service.editUnit(this.router, 'Edit', this.editing.id, data)
      : this.service.addUser(this.router, 'Create', data)
    ).subscribe(() => {
      this.getUnits();
      this.cancel();
    });
  }

  deleteUnit(event: MouseEvent) {
    const { id } = event.target as HTMLTextAreaElement;
    this.service.deleteElement(this.router, 'Delete', id).subscribe(() => {
      this.getUnits();
    });
  }

  ngOnInit(): void {}
}
