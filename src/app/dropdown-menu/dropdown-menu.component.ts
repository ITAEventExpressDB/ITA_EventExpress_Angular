import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  public items: Array<{ field: string }> = [
    { field: 'Option 1' },
    { field: 'Option 2' },
    { field: 'Option 3' }
];
  constructor() { }

  ngOnInit(): void {
  }

}
