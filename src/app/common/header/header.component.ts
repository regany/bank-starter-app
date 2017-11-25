import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() toggle: EventEmitter<any> = new EventEmitter();

  constructor(private location: Location) { }

  ngOnInit() {
  }
  toggleSideNav() {
    this.toggle.emit();
  }

}
