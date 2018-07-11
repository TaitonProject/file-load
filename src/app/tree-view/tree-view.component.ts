import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TreeViewService } from './tree-view.service';

export interface ITreeNode {
  id: number;
  name: string;
  children: Array<ITreeNode>;
  isExpanded: boolean;
  badge: number;
  parent: ITreeNode;
  isLeaf: boolean;
  selected: boolean;
  active: boolean;
  indeterminate: boolean;
}

@Component({
  selector: 'cl-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  @Input() nodes: Array<ITreeNode>;
  @Input() selectedNode: ITreeNode;
  @Input() highLightText: string;

  @Output() selectedChanged: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();
  @Output() selectedParentChanged: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();
  @Output() requestNodes: EventEmitter<ITreeNode> = new EventEmitter<ITreeNode>();

  shownNodes = [];
  constructor(public treeViewService: TreeViewService) { }

  ngOnInit(): void {
    this.treeViewService.searchNode$.subscribe(id => {
      const findNode = this.nodes.find(node => node.id === id);
      if (findNode) {
        findNode.selected = true;
        this.onSelectNode(findNode);
      }
    });
  }

  onSelectNode(node: ITreeNode) {
    node.indeterminate = false;
    // node.active = node.selected;
    this.selectChilds(node);
    this.selectedParentChanged.emit();
  }

  selectChilds(node: ITreeNode) {
    if (node.children) {
      node.children.forEach(child => {
        child.selected = node.selected;
        child.indeterminate = false;
        // child.active = child.indeterminate;
        this.selectChilds(child);
      });
    }
    this.selectedChanged.emit(node);
  }

  selectParent(node: ITreeNode) {
    const parentSelected = node.children.every(_ => _.selected);
    const parentUnselected = node.children.every(_ => !_.selected);
    const parentIndeterminate = node.children.some(_ => _.selected || _.indeterminate);
    if (parentUnselected) {
      node.selected = false;
      node.indeterminate = false;
    }
    if (parentSelected) {
      node.selected = true;
      node.indeterminate = false;
    } else if (parentIndeterminate) {
      node.indeterminate = true;
    }
    // node.active = node.indeterminate;
    this.selectedParentChanged.emit();
  }

  onExpand(node: ITreeNode) {
    node.isExpanded = !node.isExpanded;
  }

}
