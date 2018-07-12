import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HightlightDirective } from './directives/hightlight.directive';
import { TooltipModule } from './tooltip/tooltip.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HightlightDirective],
  exports: [HightlightDirective]
})
export class CoreModule { }
