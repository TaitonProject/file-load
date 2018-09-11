import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cl-custom-scroll',
  templateUrl: './custom-scroll.component.html',
  styleUrls: ['./custom-scroll.component.less']
})
export class CustomScrollComponent implements OnInit {

  items: Array<string> = new Array<string>();
  shownItems: Array<string>;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 20000; i++) {
      this.items.push('item ' + i);
    }
    console.log('items', this.items);
  }

}
