import { Injectable, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { TooltipOptions } from './tooltip.directive';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  visibleTooltip$: Subject<boolean> = new Subject();
  optionsTooltip$: Subject<TooltipOptions> = new Subject();
  tooltipElement: ElementRef;

  constructor() { }

  toggleTooltip(value: boolean) {
    console.log('toggle', value);
    this.visibleTooltip$.next(value);
  }

  setOptions(options: any) {
    this.optionsTooltip$.next(options);
  }

  setPosition(x: number, y: number, element: ElementRef) {
    const tooltipElement: HTMLElement = element.nativeElement;
    //tooltipElement.style.position = 'absolute';
    //tooltipElement.style.left = x + 'px';
    //tooltipElement.style.top = y + 'px';
    //tooltipElement.style.visibility = 'visible';
  }
}
