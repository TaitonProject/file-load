import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BiWindowPageRoutingModule } from './bi-window-page-routing.module';
import { BiWindowPageComponent } from './bi-window-page.component';
import { BiModalComponent } from './bi-modal/bi-modal.component';
import { ChartListComponent } from './bi-modal/chart-list/chart-list.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    BiWindowPageRoutingModule,
    CoreModule
  ],
  declarations: [BiWindowPageComponent, BiModalComponent, ChartListComponent]
})
export class BiWindowPageModule { }
