import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'cl-cl-greed',
  templateUrl: './cl-greed.component.html',
  styleUrls: ['./cl-greed.component.less']
})
export class ClGreedComponent implements OnInit {

  text = '23';

  constructor(private _cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  autofit() {
    this._cd.detectChanges();
  }

}
