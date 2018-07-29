import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HightlightDirective } from './directives/hightlight.directive';
import { TooltipDirective } from './tooltip/tooltip.directive';
import { TooltipContainerComponent } from './tooltip/tooltip-container/tooltip-container.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HightlightDirective, TooltipDirective, TooltipContainerComponent],
  exports: [HightlightDirective, TooltipDirective, TooltipContainerComponent],
  providers: []
})
export class CoreModule { }
