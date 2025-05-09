import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit{
  innerWidth: any;

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window: resize', ['$event'])
  onResize(event: any){
    this.innerWidth = window.innerWidth;
  }

  getClass() {
    return this.innerWidth < 925 ? 'row-md' : 'row';
  }

}
