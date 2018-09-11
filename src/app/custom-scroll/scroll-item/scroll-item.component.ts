import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cl-scroll-item',
  templateUrl: './scroll-item.component.html',
  styleUrls: ['./scroll-item.component.less']
})
export class ScrollItemComponent implements OnInit, OnChanges {

  @Input() index: number;
  @Input() data: string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    // console.log('cahnges!');
  }
}
