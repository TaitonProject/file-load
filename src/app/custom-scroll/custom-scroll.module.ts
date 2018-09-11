import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomScrollRoutingModule } from './custom-scroll-routing.module';
import { CustomScrollComponent } from './custom-scroll.component';
import { ClVirtualScrollComponent } from './cl-virtual-scroll/cl-virtual-scroll.component';
import { ScrollItemComponent } from './scroll-item/scroll-item.component';

@NgModule({
  imports: [
    CommonModule,
    CustomScrollRoutingModule
  ],
  declarations: [CustomScrollComponent, ClVirtualScrollComponent, ScrollItemComponent]
})
export class CustomScrollModule { }
