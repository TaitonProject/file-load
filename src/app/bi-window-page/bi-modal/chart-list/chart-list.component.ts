import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cl-chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.less']
})
export class ChartListComponent implements OnInit {

  @Input() items: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
