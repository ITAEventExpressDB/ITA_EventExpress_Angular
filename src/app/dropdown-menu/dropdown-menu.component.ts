import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  public items: Array<{ field: string, path: string } > = [
    { field: 'About Us', path: '/about' },
    { field: 'users-form', path: '/users-form' },
    { field: 'unit-of-measurings-form', path: '/unit-of-measurings-form' },
    { field: 'admin-form', path: '/admin-form' },
    { field: 'categories-form', path: '/categories-form' },
    { field: 'contact-admin-form', path: '/contact-admin-form' }
];
  constructor() { }

  ngOnInit(): void {
  }
  goTo(path: string): void {
       location.href=`${path}`
    }
  }

