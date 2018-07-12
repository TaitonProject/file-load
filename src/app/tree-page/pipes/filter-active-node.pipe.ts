import { Pipe, PipeTransform } from '@angular/core';
import { ITreeNode } from '../../tree-view/tree-view.component';

@Pipe({
  name: 'filterActiveNode'
})
export class FilterActiveNodePipe implements PipeTransform {

  transform(nodes: ITreeNode[], args?: any): any {
    // console.log('resultNodes', this.searchByNode(nodes));
    return this.getSelectedNodes(nodes);
  }

  getSelectedNodes(nodes: ITreeNode[]): ITreeNode[] {
    const resultNodes = [];
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (node.active) {
        if (node.children) {
          node.children = this.getActiveChilds(node.children);
        }
        resultNodes.push(node);
      }
      if (node.children) {
        resultNodes.push(...this.getSelectedNodes(node.children));
      }
    }
    return resultNodes;
  }

  getActiveChilds(nodes: ITreeNode[]): ITreeNode[] {
    const resultNodes = [];
    nodes.forEach(node => {
      if (node.active) {
        resultNodes.push(node);
      }
      if (node.children) {
        resultNodes.push(...this.getActiveChilds(node.children));
      }
    });
    return resultNodes;
  }
}
