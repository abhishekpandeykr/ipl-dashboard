import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  logoPath: string = '../../assets/images/logo.png';

  menuLinks: string[] = [
    'MATCHES',
    'VIDEOS',
    'STATS',
    'POINT TABLE',
    'FANTASY',
    'TEAMS',
    'NEWS',
    'MORE',
  ];
  constructor() {}

  ngOnInit(): void {}
}
