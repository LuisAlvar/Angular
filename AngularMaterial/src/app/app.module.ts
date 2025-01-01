import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularMaterialModule } from './angular-material.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicSidenavComponent } from './basic-sidenav/basic-sidenav.component';
import { BasicDrawerComponent } from './basic-drawer/basic-drawer.component';
import { SidenavOpenCloseComponent } from './sidenav-open-close/sidenav-open-close.component';

import { provideAnimations } from '@angular/platform-browser/animations';
import { SidenavModeComponent } from './sidenav-mode/sidenav-mode.component';
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { HeaderComponent } from './header/header.component';
import { ToolbarOverviewComponent } from './toolbar-overview/toolbar-overview.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CustomHeaderComponent } from './custom-header/custom-header.component';
import { CustomSidenavComponent } from './custom-sidenav/custom-sidenav.component';
import { SidenavService } from './custom-sidenav/SidenavService';
import { GridListComponent } from './grid-list/grid-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicSidenavComponent,
    BasicDrawerComponent,
    SidenavOpenCloseComponent,
    SidenavModeComponent,
    SidenavResponsiveComponent,
    HeaderComponent,
    ToolbarOverviewComponent,
    SidenavComponent,
    CustomHeaderComponent,
    CustomSidenavComponent,
    GridListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularMaterialModule
  ],
  providers: [
    provideAnimations(),
    SidenavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
