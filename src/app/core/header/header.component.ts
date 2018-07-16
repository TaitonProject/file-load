import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ROUTES_PATH } from '../../shared/constants/routes.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  ROUTES = ROUTES_PATH;

  constructor() { }

  ngOnInit() {
  }

}
