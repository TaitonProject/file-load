import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeViewComponent } from './tree-view.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { CoreModule } from '../core/core.module';
import { NodeElementComponent } from './node-element/node-element.component';

@NgModule({
  imports: [
    CommonModule,
    VirtualScrollModule,
    CoreModule
  ],
  declarations: [TreeViewComponent, NodeElementComponent],
  exports: [TreeViewComponent]
})
export class TreeViewModule { }
