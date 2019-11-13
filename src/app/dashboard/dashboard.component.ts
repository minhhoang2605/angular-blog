import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  viewportWidth: any;
  showNavBar: boolean = false;

  constructor() { }

  ngOnInit() {
    this.viewportWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.viewportWidth = window.innerWidth;
    if (this.viewportWidth > 700) {
      this.showNavBar = false;
    }
  }

  toggleNav() {
    if (this.showNavBar == true) {
      this.showNavBar = false;
    } else {
      this.showNavBar = true;
    }
    console.log("Set to " + this.showNavBar);
  }
}
