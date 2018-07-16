import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cl-simple-item',
  templateUrl: './simple-item.component.html',
  styleUrls: ['./simple-item.component.css']
})
export class SimpleItemComponent implements OnInit {

  @Input() item: string;

  @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
