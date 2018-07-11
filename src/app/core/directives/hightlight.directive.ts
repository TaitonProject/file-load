import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[clHightlight]'
})
export class HightlightDirective implements OnChanges {

  @Input() highlightText: string;

  constructor(private _elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges) {
    for (const prop in changes) {
      if (prop === 'highlightText' && this.highlightText) {
        this.highlight(this.highlightText);
      }
    }
  }

  highlight(text: string) {
    const inputText = this._elementRef.nativeElement;
    let innerHTML = inputText.innerHTML;
    const index = innerHTML.indexOf(text);
    if (index >= 0) {
      innerHTML = innerHTML.substring(0, index)
        + '<span class=\'highlight\' style="color: blue">' +
        innerHTML.substring(index, index + text.length) +
        '</span>' +
        innerHTML.substring(index + text.length);
      inputText.innerHTML = innerHTML;
    }
  }
}
