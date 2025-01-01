import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrl: './custom-header.component.css'
})
export class CustomHeaderComponent implements OnInit {

  @Input() sidenav!: MatSidenav

  constructor() { }

  ngOnInit() {
  }

}
