import { Component, OnInit } from '@angular/core';
import { ROUTES_PATH } from '../../shared/constants/routes.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  ROUTES = ROUTES_PATH;

  constructor() { }

  ngOnInit() {
  }

}
