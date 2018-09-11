import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'cl-virtual-scroll',
  templateUrl: './cl-virtual-scroll.component.html',
  styleUrls: ['./cl-virtual-scroll.component.less']
})
export class ClVirtualScrollComponent implements OnInit {

  @Input() items: Array<any>;

  @Input() itemHeight = 18;

  @Output() update: EventEmitter<Array<any>> = new EventEmitter<Array<any>>();

  scroll$: Subject<any> = new Subject();
  height: number;
  startIndex = 0;
  endIndex = 10;
  showItemCount = 10;
  padding: number;
  lastDate = new Date().getTime();
  lastOffset = 0;
  constructor() { }

  ngOnInit() {
    this.height = (this.items.length - 10) * this.itemHeight;
    this.update.emit(this.items.slice(0, 10 + this.showItemCount));
    this.scroll$.pipe(debounceTime(50)).subscribe(event => {
      // console.log('event', event.target.scrollTop);
      // let endIndex: number;
      console.log('event', event);
      this.padding = event.target.scrollTop;
      // console.log('padding', this.padding);
      this.endIndex = (event.target.scrollTop / this.itemHeight) + this.showItemCount;
      // console.log('start index', this.endIndex);
      // console.log('indices', this.endIndex);
      // console.log('indices', this.endIndex - 10 > 0 ? this.endIndex - 10 : 0, this.endIndex > 10 ? this.endIndex : 10);
      this.update.emit(this.items.slice(this.endIndex - 10 > 0 ? this.endIndex - 10 : 0, this.endIndex > 10 ? this.endIndex + 10 : 20));
    });
  }

  scroll(e: any) {
    this.scroll$.next(e);
    const delayInMs = e.timeStamp - this.lastDate;
    const offset = e.target.scrollTop - this.lastOffset;
    const speedInpxPerMs = offset / delayInMs;
    this.lastOffset = offset;
    console.log(speedInpxPerMs);

  }

}
