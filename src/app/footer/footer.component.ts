import { Component, OnInit } from '@angular/core';

interface footerLinksItems {
  name: string;
  path: string;
}
interface footerSocialLinksItems {
  icon: string;
  link: string;
}

const footerLinksMapper: footerLinksItems[] = [
  { name: 'Home', path: '' },
  { name: 'Search Event', path: 'search-event' },
  { name: 'Create Event', path: 'create-event' },
  { name: 'Terms', path: 'terms' },
  { name: 'About', path: 'about' },
];

const footerSocialLinksMapper: footerSocialLinksItems[] = [
  { icon: 'fab fa-facebook-f fa-lg', link: 'https://uk-ua.facebook.com' },
  { icon: 'fab fa-instagram fa-xl', link: 'https://www.instagram.com' },
  { icon: 'fab fa-youtube fa-xl', link: 'https://youtube.com' },
];

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  socialLinks = footerSocialLinksMapper;
  links = footerLinksMapper;
}
