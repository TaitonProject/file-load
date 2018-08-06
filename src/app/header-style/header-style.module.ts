import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderStyleRoutingModule } from './header-style-routing.module';
import { HeaderStyleComponent } from './header-style.component';

@NgModule({
  imports: [
    CommonModule,
    HeaderStyleRoutingModule
  ],
  declarations: [HeaderStyleComponent]
})
export class HeaderStyleModule { }
