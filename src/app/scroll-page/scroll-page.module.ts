import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollPageRoutingModule } from './scroll-page-routing.module';
import { ScrollPageComponent } from './scroll-page.component';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import { SimpleItemComponent } from './simple-item/simple-item.component';

@NgModule({
  imports: [
    CommonModule,
    ScrollPageRoutingModule,
    VirtualScrollModule
  ],
  declarations: [ScrollPageComponent, SimpleItemComponent]
})
export class ScrollPageModule { }
