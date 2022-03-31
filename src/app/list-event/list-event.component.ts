import { Component, OnInit } from '@angular/core';

interface eventItems {
  id: number;
  eventImagePath: string;
  title: string;
  description: string;
  location: string;
  date: string;
}

const eventsMapper:eventItems[] = [
  {
    "id": 1,
    "eventImagePath": '../../assets/images/eventPhothos/vegan.jpg',
    "title": "Vegan For Beginners Online Workshop",
    "description": "More and more people are interested in vegan/plant-based eating. Some are curious, some want to get their feet wet, and others are ready to come to the V-side! I am here for you all! I offer information to introduce you to what eating vegan is like. This workshop occurs on Zoom and it would be awesome if you turned your camera on!",
    "location": "Online",
    "date": "2022-05-01",
  },
  {
    "id": 2,
    "eventImagePath": '../../assets/images/eventPhothos/football.jpg',
    "title": "Football, Finances & Fundraising Workshop - Get top tips to help your club",
    "description": "The workshop will cover a range of areas including: budgeting, planning, grant funding, sponsorship, fundraising. Attendees will receive advice and ideas from the tutor and be encouraged to share their experiences and views in breakouts rooms.",
    "date": "2022-05-04",
    "location": "Map",
  },
  {
    "id": 3,
    "eventImagePath": '../../assets/images/eventPhothos/painting.jpg',
    "title": "The Portrait in isolation: tonal painting Online Session",
    "description": "Painting from the model can be difficult to navigate, balancing colour, tone, proportions, perspective, composition, and emotional narrative. Through this class we will get back to the basics of life-painting, referencing the work of some of the great life-painters, William Etty, Lucien Freud, Euan Uglow, Jenny Saville and more, mining their work for their wisdom on painting TONE, all whilst using yourself as the model!",
    "date": "2022-04-27",
    "location": "Online",
  }
]

@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
  
export class ListEventComponent implements OnInit {

  constructor() { }

  mapper = eventsMapper;

  ngOnInit(): void {
  }

}
