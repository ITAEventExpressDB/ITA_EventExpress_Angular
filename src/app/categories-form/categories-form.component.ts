import { Component, OnInit } from '@angular/core';
import { CategoriesFormService } from '../services/categories-form.service';

@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.scss']
})
export class CategoriesFormComponent implements OnInit {
 
  title = 'Add';
  categories : any;
  router = 'Category';
  editing = { val: false, title: 'Add', id: '' };

  constructor(private category: CategoriesFormService) {
    this.getCategories();
   }
   cancel() {
    this.editing = { val: false, title: 'Add', id: '' };
  }

  getCategories() {
    this.category.allCategories().subscribe((data) => {
      this.categories = data;
    });
  }

  getCategory(data: any) {
    (this.editing.val
      ? this.category.editCategory(this.editing.id, data)
      : this.category.createCategory(data)
    ).subscribe(() => {
      this.getCategories();
      this.cancel();
    });
  }

  deleteCategory(id: string) {
    this.category.deleteCategory(id).subscribe(() => {
      this.getCategories();
    });
  }

  editCategory(id: string) {
    this.editing = { val: true, title: 'Edit', id };
  }

  ngOnInit(): void {
  }

}
