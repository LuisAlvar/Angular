import { Component } from '@angular/core';
import { SidenavService } from './custom-sidenav/SidenavService';
import { onMainContentChange } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [onMainContentChange]
})
export class AppComponent {
  public onSidenavChange!: boolean;
  title = 'AngularMaterial';

  constructor(private sidenavService: SidenavService) {
    this.sidenavService.sideNavState$.subscribe(res => {
      console.log(res);
      this.onSidenavChange = res;
    })
  }
}
