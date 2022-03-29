import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
})
export class PageComponent implements OnInit {
  buttonTitle = 'Show me!';

  constructor() {}

  ngOnInit(): void {}

  myClick = (input: any) => {
    const name: string = input.value;
    alert(`Hi, my important ${name}!`);
    input.value = null;
  };
}
