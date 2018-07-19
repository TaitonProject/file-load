import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { HightlightDirective } from './directives/hightlight.directive';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HightlightDirective],
  exports: [HightlightDirective]
})
export class CoreModule { }
