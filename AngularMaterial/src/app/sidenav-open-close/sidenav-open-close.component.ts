import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav-open-close',
  templateUrl: './sidenav-open-close.component.html',
  styleUrl: './sidenav-open-close.component.css'
})
export class SidenavOpenCloseComponent {
  events: string[] = [];
  opened!: boolean;
}
