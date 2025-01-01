import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { SidenavService } from './sidenav-service';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css'
})
export class SidenavComponent {
  @ViewChild('mySidenav') mySidenav!: MatSidenav;

  constructor(private sidenavService: SidenavService) { }

  ngAfterViewInit() {
    this.sidenavService.setSidenav(this.mySidenav);
  }
}
