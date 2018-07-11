import { Component, OnInit, Input, AfterViewInit, ViewChild, EventEmitter, Output } from '@angular/core';
import { TreeComponent, TreeModel, TreeNode } from 'angular-tree-component';

@Component({
  selector: 'cl-tree-view',
  templateUrl: './cl-tree-view.component.html',
  styleUrls: ['./cl-tree-view.component.css']
})
export class ClTreeViewComponent implements OnInit, AfterViewInit {

  @Input() nodes: any;

  @Input() options: any;

  @Output() changes: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('tree') treeComponent: TreeComponent;

  treeModel: TreeModel;
  searchInput: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.treeModel = this.treeComponent.treeModel;
  }

  nodeActivate(event: any) {
    console.log(event);
  }

  getActiveNodes() {
    const activeNodes: TreeNode[] = this.treeModel.activeNodes;
    console.log('active nodes', activeNodes);
    const selected = Object.assign({}, this.treeComponent.treeModel.selectedLeafNodeIds);
    console.log(selected);
  }

  select(evnet: any) {
    // console.log(event);
  }

  changeState(event: any) {
    console.log(event);
    this.changes.next(event);
  }

  yourHandler(event: any) {
    console.log('event', event);
  }
}
