import { Directive, ElementRef,Output,EventEmitter,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private _elementRef : ElementRef) {
  }
  @Output() appClickOutside = new EventEmitter();
  @HostListener('document:click', ['$event'])
  public onClick(e) {
    const target = e.target as HTMLElement;
    const clickedInside = this._elementRef.nativeElement.contains(target);
    if (!clickedInside) {
          this.appClickOutside.emit(true);
      }
  }

}
