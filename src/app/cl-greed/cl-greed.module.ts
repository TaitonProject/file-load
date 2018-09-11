import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClGreedRoutingModule } from './cl-greed-routing.module';
import { ClGreedComponent } from './cl-greed.component';

@NgModule({
  imports: [
    CommonModule,
    ClGreedRoutingModule
  ],
  declarations: [ClGreedComponent]
})
export class ClGreedModule { }
