import { Component, OnInit, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnChanges {

  @Input('peoples') set peoplesSetter(peoples: any[]) {
    console.log('change!! setter');
    this.peoples = peoples;
  }
  peoples: any[];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('changes input!!');
  }

}
