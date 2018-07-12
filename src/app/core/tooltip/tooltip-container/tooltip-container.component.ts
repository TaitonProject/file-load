import { Component, DoCheck, NgZone, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { TooltipService } from '../tooltip.service';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'cl-tooltip-container',
  templateUrl: './tooltip-container.component.html',
  styleUrls: ['./tooltip-container.component.css'],
  animations: [
    trigger('toggleTooltip', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('show => hide', animate('100ms ease-out')),
      transition('hide => show', animate('300ms ease-in')),
      // transition('show => hide', animate('100ms ease-in')),
    ])
  ],
})
export class TooltipContainerComponent implements AfterViewInit, DoCheck {

  @ViewChild('tooltip') tooltipElement: ElementRef;

  visibleTooltip: boolean;
  stateVisible = 'hide';
  content: string;

  constructor(public tooltipService: TooltipService, private _zone: NgZone) { }

  ngAfterViewInit(): void {
    this.tooltipService.tooltipElement = this.tooltipElement;
    this.tooltipService.visibleTooltip$.subscribe(visible => {
      this._zone.run(() => {
        this.visibleTooltip = visible;
        this.toggleVisibleTooltip();
        if (!visible) {
          //this.tooltipElement.nativeElement.style.visibility = 'hidden';
        }
      });
    });
    this.tooltipService.optionsTooltip$.subscribe(options => {
      this._zone.run(() => {
        this.content = options.content;
        this.tooltipService.setPosition(options.position.x, options.position.y, this.tooltipElement);
      });
    });
  }

  toggleVisibleTooltip() {
    this.stateVisible = this.visibleTooltip ? 'show' : 'hide';
  }

  ngDoCheck(): void {
    console.log('do check!');
  }
}
