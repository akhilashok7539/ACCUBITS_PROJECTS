import { Directive, HostListener, OnInit, ElementRef, Input, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Directive({
  selector: '[appDebounce]'
})
export class DebounceDirective implements OnInit, OnDestroy {

  @Input() delay = 500;
  @Output() getValue = new EventEmitter();
  private keyPress = new Subject();
  private subscription: Subscription;
  constructor(private el: ElementRef) {
    el.nativeElement.setAttribute('autocomplete', 'off');
  }
  @HostListener('keyup', ['$event'])
  keyup(event: Event) {
    this.keyPress.next(this.el.nativeElement.value);
  }
  ngOnInit(): void {
    this.subscription = this.keyPress
      .pipe(debounceTime(this.delay)
        , distinctUntilChanged())
      .subscribe(e => {
        this.getValue.emit(this.el.nativeElement.value);
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
