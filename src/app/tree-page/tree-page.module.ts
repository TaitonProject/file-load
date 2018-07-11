import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreePageRoutingModule } from './tree-page-routing.module';
import { TreePageComponent } from './tree-page.component';
// import { ClTreeViewModule } from '../cl-tree-view/cl-tree-view.module';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { TreeViewModule } from '../tree-view/tree-view.module';
import { FormsModule } from '@angular/forms';
import { FilterActiveNodePipe } from './pipes/filter-active-node.pipe';
import { FilterNodesPipe } from './pipes/filter-nodes.pipe';

@NgModule({
  imports: [
    CommonModule,
    TreePageRoutingModule,
    // ClTreeViewModule,
    FormsModule,
    VirtualScrollModule,
    TreeViewModule
  ],
  declarations: [TreePageComponent, FilterActiveNodePipe, FilterNodesPipe]
})
export class TreePageModule { }
