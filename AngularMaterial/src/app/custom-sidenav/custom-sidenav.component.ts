import { Component, OnInit } from '@angular/core';
import { onSidenavChange, animateText } from './../animations';
import { SidenavService } from './SidenavService';


interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-custom-sidenav',
  templateUrl: './custom-sidenav.component.html',
  styleUrl: './custom-sidenav.component.css',
  animations: [onSidenavChange, animateText]
})
export class CustomSidenavComponent implements OnInit {

  public sideNavState: boolean = false;
  public linkText: boolean = false;

  public pages: Page[] = [
    { name: 'Inbox', link: 'some-link', icon: 'inbox' },
    { name: 'Starred', link: 'some-link', icon: 'star' },
    { name: 'Send email', link: 'some-link', icon: 'send' },
  ]

  constructor(private sidenavService: SidenavService) { }

  ngOnInit() { }


  onSidenavToggle() {
    this.sideNavState = !this.sideNavState

    setTimeout(() => {
      this.linkText = this.sideNavState;
    }, 200)
    this.sidenavService.sideNavState$.next(this.sideNavState)
  }
}
