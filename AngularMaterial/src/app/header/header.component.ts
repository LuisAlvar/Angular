import { Component } from '@angular/core';

import { SidenavService } from './../sidenav/sidenav-service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private sidenavService: SidenavService) { }

  toggleSidenav() {
    this.sidenavService.toggle();
  }
}
