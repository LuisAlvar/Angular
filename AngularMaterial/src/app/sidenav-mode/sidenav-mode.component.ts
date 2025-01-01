import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-sidenav-mode',
  templateUrl: './sidenav-mode.component.html',
  styleUrl: './sidenav-mode.component.css'
})
export class SidenavModeComponent {
  mode = new FormControl('over' as MatDrawerMode);
}
