import { Component, OnInit } from '@angular/core';

interface eventItems {
  id: number;
  eventImagePath: string;
  title: string;
}


const eventsMapper:eventItems[] = [
  {
    "id": 1,
    "eventImagePath": '../../assets/images/eventPhothos/vegan.jpg',
    "title": "Vegan For Beginners Online Workshop",
  },
  {
    "id": 2,
    "eventImagePath": '../../assets/images/eventPhothos/football.jpg',
    "title": "Football, Finances & Fundraising Workshop - Get top tips to help your club",
  },
  {
    "id": 3,
    "eventImagePath": '../../assets/images/eventPhothos/painting.jpg',
    "title": "The Portrait in isolation: tonal painting Online Session",
  },
  {
    "id": 4,
    "eventImagePath": '../../assets/images/eventPhothos/vegan.jpg',
    "title": "Vegan For Beginners Online Workshop",
  },
  {
    "id": 5,
    "eventImagePath": '../../assets/images/eventPhothos/football.jpg',
    "title": "Football, Finances & Fundraising Workshop - Get top tips to help your club",
  },
  {
    "id": 6,
    "eventImagePath": '../../assets/images/eventPhothos/painting.jpg',
    "title": "The Portrait in isolation: tonal painting Online Session",
  }
]

@Component({
  selector: 'app-event-matrix',
  templateUrl: './event-matrix.component.html',
  styleUrls: ['./event-matrix.component.scss']
})
export class EventMatrixComponent implements OnInit {

  constructor() { }
  mapper = eventsMapper;

  ngOnInit(): void {
  }

}
