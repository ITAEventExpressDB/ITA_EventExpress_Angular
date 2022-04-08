import { Component, OnInit } from '@angular/core';

interface footerLinksItems{
	name: string;
  path: string;
}

const footerLinksMapper:footerLinksItems[] =[
    { name: "Home", path: "/home" },
    { name: "Search Event", path: "/events" },
    { name: "Create Event", path: "" },
    { name: "Terms", path: "/terms" },
    { name: "About", path: "/about" },
  ];

  interface footerSocialLinksItems{
    icon: string;
    link: string;
  }

  const footerSocialLinksMapper:footerSocialLinksItems[] = [
    { icon: "fab fa-facebook-f", link: "https://uk-ua.facebook.com" },
    { icon: "fab fa-instagram", link: "https://www.instagram.com" },
    { icon: "fab fa-youtube", link: "https://www.instagram.com" },
  ];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {

  ngOnInit(): void {}
  
  mapperLinks = footerLinksMapper;
  mapperSocialLinks = footerSocialLinksMapper;
}
