import { Injectable, ElementRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ClTooltipOptions } from './tooltip-options';

@Injectable({
  providedIn: 'root'
})
export class TooltipService {

  visibleTooltip$: Subject<boolean> = new Subject();
  optionsTooltip$: Subject<ClTooltipOptions> = new Subject();

  constructor() { }

  toggleTooltip(value: boolean) {
    this.visibleTooltip$.next(value);
  }

  setOptions(options: any) {
    this.optionsTooltip$.next(options);
  }

  setPosition(x: number, y: number, element: ElementRef) {
    const tooltipElement: HTMLElement = element.nativeElement;
    const indent = 10; // indent between tooltip and cursor, viewport borders, etc.
    const viewportWidth = document.documentElement.clientWidth - indent;
    const viewportHeight = document.documentElement.clientHeight - indent;
    const tooltipWidth = tooltipElement.offsetWidth;
    const tooltipHeight = tooltipElement.offsetHeight;
    let tooltipX = x + indent;
    let tooltipY = y + indent;

    if (tooltipX + tooltipWidth > viewportWidth) {
      tooltipX = tooltipX - tooltipWidth - 2 * indent;
    }

    if (tooltipY + tooltipHeight > viewportHeight) {
      tooltipY = tooltipY - tooltipHeight - 2 * indent;
    }

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = tooltipX + 'px';
    tooltipElement.style.top = tooltipY + 'px';
    tooltipElement.style.visibility = 'visible';
  }
}


