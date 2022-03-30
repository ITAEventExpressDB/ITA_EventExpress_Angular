import { Component, OnInit } from '@angular/core';

interface aboutUsItems{
	img: string;
	text: string;
}

const aboutUsMapper:aboutUsItems[] =[
	{ img: '../../assets/images/aboutUs/aboutImg-1.png', text: "Search events" },
	{ img: '../../assets/images/aboutUs/aboutImg-2.png', text: "Create your event" },
	{ img: '../../assets/images/aboutUs/aboutImg-3.png', text: "Find events" },
    { img: '../../assets/images/aboutUs/aboutImg-4.png', text: "Get connected" },
    { img: '../../assets/images/aboutUs/aboutImg-5.png', text: "Have fun together" },
]
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  ngOnInit(): void {}
  
  mapper = aboutUsMapper;

  joinUs(): void {
	  console.log("join us");
  }
}
