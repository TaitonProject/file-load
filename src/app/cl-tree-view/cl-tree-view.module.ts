import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClTreeViewComponent } from './cl-tree-view.component';
import { TreeModule } from 'angular-tree-component';

@NgModule({
  imports: [
    CommonModule,
    TreeModule
  ],
  declarations: [ClTreeViewComponent],
  exports: [ClTreeViewComponent]
})
export class ClTreeViewModule { }
