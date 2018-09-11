import { Component, NgZone, ElementRef, AfterViewInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TooltipService } from '../tooltip.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription } from 'rxjs';
import { combineLatest, debounceTime } from 'rxjs/operators';

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
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipContainerComponent implements AfterViewInit, OnDestroy {

    static counter = 0;
    visibleTooltip: boolean;
    stateVisible = 'hide';
    content: string;
    subscriptions: Array<Subscription> = new Array<Subscription>();

    constructor(
        public element: ElementRef,
        public tooltipService: TooltipService,
        private _zone: NgZone,
        private _cd: ChangeDetectorRef) { }

    ngAfterViewInit(): void {
        this.subscriptions.push(
            this.tooltipService.optionsTooltip$.pipe(combineLatest(this.tooltipService.visibleTooltip$)).pipe(debounceTime(5))
                .subscribe(res => {
                    // console.log('res', res);
                    this._zone.run(() => {
                        this.content = res[0].content;
                        this.tooltipService.setPosition(res[0].position.x, res[0].position.y, this.element);
                        this.visibleTooltip = res[1];
                        this.toggleVisibleTooltip();
                        this._cd.markForCheck();
                    });
                })
        );
    }

    toggleVisibleTooltip() {
        this.stateVisible = this.visibleTooltip ? 'show' : 'hide';
        if (!this.visibleTooltip) {
            this.element.nativeElement.style.visibility = 'hidden';
        }
    }

    counter() {
        // console.log('count!', TooltipContainerComponent.counter++);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(_ => _.unsubscribe());
    }

}
