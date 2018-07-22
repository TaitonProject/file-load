import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-bi-modal',
  templateUrl: './bi-modal.component.html',
  styleUrls: ['./bi-modal.component.less']
})
export class BiModalComponent implements OnInit {

  chartItems: Array<string> = new Array<string>();
  availableItems: Array<string> = new Array<string>();
  constructor() { }

  ngOnInit() {
    this.initAvailableItems();
    this.initChartItems();
  }

  initAvailableItems() {
    for (let i = 0; i < 30; i++) {
      this.availableItems.push('available item ' + i);
    }
  }

  initChartItems() {
    for (let i = 0; i < 20; i++) {
      this.chartItems.push('chart item ' + i);
    }
  }
}
