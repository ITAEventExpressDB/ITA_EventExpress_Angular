import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  public items: Array<{ field: string} > = [
    { field: 'About Us' },
    { field: 'users-form' },
    { field: 'users-form' },
    { field: 'admin-form' },
    { field: 'categories-form' }
];
  constructor() { }

  ngOnInit(): void {
  }

}
