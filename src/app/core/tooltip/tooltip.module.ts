import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipContainerComponent } from './tooltip-container/tooltip-container.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipService } from './tooltip.service';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [TooltipContainerComponent, TooltipDirective],
    exports: [TooltipContainerComponent, TooltipDirective],
    providers: [TooltipService]
})
export class TooltipModule { }
