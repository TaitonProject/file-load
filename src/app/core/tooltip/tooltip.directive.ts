import { Directive, ElementRef, OnDestroy, Input, NgZone, Renderer2, AfterViewInit } from '@angular/core';
import { TooltipService } from './tooltip.service';

export interface TooltipOptions {
  content: string;
  position: { x: number, y: number };
  element: ElementRef;
}

@Directive({
  selector: '[clTooltip]'
})
export class TooltipDirective implements AfterViewInit, OnDestroy {

  @Input() clTooltip: string;
  _showTimeout: any;
  constructor(private _element: ElementRef,
    private _tooltipService: TooltipService,
    private _zone: NgZone,
    private _renderer: Renderer2) { }

  show = ($event) => {
    this._showTimeout = setTimeout(() => {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
      this._tooltipService.toggleTooltip(true);
      this._tooltipService.setOptions({ content: this.clTooltip, position: { x: $event.pageX, y: $event.pageY } });
    }, 300);
  }

  hide = () => {
    if (this._showTimeout) {
      clearTimeout(this._showTimeout);
      return this._showTimeout = undefined;
    }
    this._tooltipService.toggleTooltip(false);
  }

  ngAfterViewInit() {
    this._zone.runOutsideAngular(_ => {
      this._renderer.listen(this._element.nativeElement, 'mouseenter', this.show);
      this._renderer.listen(this._element.nativeElement, 'mouseleave', this.hide);
      this._renderer.listen(this._element.nativeElement, 'focusin', this.show);
      this._renderer.listen(this._element.nativeElement, 'focusout', this.hide);
    });
  }

  ngOnDestroy(): void {
    this.hide();
  }
}
