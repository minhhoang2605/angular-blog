import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleNav() {
    if (document.getElementById('sidenav').style.width !== '0px') {
      document.getElementById('sidenav').style.width = '0px';
      document.getElementById('main').style.marginLeft = '0px';
      document.getElementById('myButton').innerHTML = '☰';
    } else {
      document.getElementById('sidenav').style.width = '240px';
      document.getElementById('main').style.marginLeft = '240px';
      document.getElementById('myButton').innerHTML = 'X';
    }
  }
}
