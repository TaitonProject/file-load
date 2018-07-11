import { Pipe, PipeTransform } from '@angular/core';
import { ITreeNode } from '../../tree-view/tree-view.component';

@Pipe({
  name: 'filterNodes'
})
export class FilterNodesPipe implements PipeTransform {

  transform(nodes: ITreeNode[], search: string, args?: any): ITreeNode[] {
    if (search && search.length > 0) {
      return this.searchByNode(nodes, search);
    }
    return nodes;
  }

  searchByNode(nodes: ITreeNode[], search: string) {
    const resultNodes = [];
    nodes.forEach(node => {
      if (node.name.search(search) !== -1) {
        resultNodes.push(node);
        if (node.children && node.children.length > 0) {
          resultNodes.push(...this.searchByNode(node.children, search));
        }
      }
      if (node.children && node.children.length > 0) {
        resultNodes.push(...this.searchByNode(node.children, search));
      }
    });
    return resultNodes;
  }
}
