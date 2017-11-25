import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  title = 'app';
  @ViewChild('sidenav') sideNav: MatSidenav;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, ) {
  }

  ngAfterViewInit() {
    // default to closed
    this.sideNav.close();

    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event: NavigationEnd) => {
        this.toggleSideNav(event.url !== '/login');
      });
  }

  toggleSideNav(bool?: boolean) {
    this.sideNav.toggle(bool);
  }

}
