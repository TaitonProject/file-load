import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiWindowPageRoutingModule } from './bi-window-page-routing.module';
import { BiWindowPageComponent } from './bi-window-page.component';
import { BiModalComponent } from './bi-modal/bi-modal.component';
import { ChartListComponent } from './bi-modal/chart-list/chart-list.component';
import { TooltipModule } from '../core/tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    BiWindowPageRoutingModule,
    TooltipModule
  ],
  declarations: [BiWindowPageComponent, BiModalComponent, ChartListComponent]
})
export class BiWindowPageModule { }
