import { Component, OnInit, Input } from '@angular/core';
import { ITreeNode } from '../tree-view.component';

@Component({
  selector: 'cl-node-element',
  templateUrl: './node-element.component.html',
  styleUrls: ['./node-element.component.css']
})
export class NodeElementComponent implements OnInit {

  @Input() node: ITreeNode;
  @Input() highLightText: string;

  constructor() { }

  ngOnInit() {
  }

}
