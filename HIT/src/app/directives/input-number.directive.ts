import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
interface InputConfig { isNegative: boolean; isDecimal: boolean; integerLength: number; decimalPlaces?: number; }
@Directive({
  selector: '[appInputNumber]'
})
export class InputNumberDirective {

  constructor(private el: ElementRef, private control: NgControl) {
    el.nativeElement.setAttribute('autocomplete', 'off');
  }
  configuration: InputConfig;
  @Input()
  set config(value: InputConfig) {
    this.configuration = value;
  }
  @HostListener('keydown', ['$event'])
  keyDown(event) {
    if (!this.configuration.isNegative && event.key === '-') {
      event.preventDefault();
      return;
    }

    if (!this.configuration.isDecimal && event.key === '.') {
      event.preventDefault();
      return;
    }
    if (event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === 'ArrowRight' ||
      event.key === 'ArrowLeft' ||
      event.key === 'Tab' ||
      (this.el.nativeElement.value === '' && event.key === '.')) {
      return;
    }
    const value = this.el.nativeElement.value + event.key;
    if (isNaN(value)) {
      event.preventDefault();
    }
    if (this.configuration.decimalPlaces) {
      const split = (this.el.nativeElement.value).split('.');
      if (split.length > 1 && split[1].length >= this.configuration.decimalPlaces) {
        event.preventDefault();
        return;
      }
    }

    if (this.configuration.integerLength && event.key !== '.') {
      const max = Math.pow(10, Number(this.configuration.integerLength));
      if (max <= Number(value)) {
        event.preventDefault();
        return;
      }
    }
  }
  @HostListener('keyup', ['$event'])
  keyUp(event) {
    const abstractControl = this.control.control;
    const value = this.el.nativeElement.value;
    if (isNaN(value)) {
      abstractControl.setErrors({ invalidNo: true });
    }
    if (this.configuration.decimalPlaces) {
      const split = (this.el.nativeElement.value).split('.');
      if (split.length > 1 && split[1].length > this.configuration.decimalPlaces) {
        abstractControl.setErrors({ invalidNo: true });
        return;
      }
    }

    if (this.configuration.integerLength && event.key !== '.') {
      const max = Math.pow(10, Number(this.configuration.integerLength));
      if (max <= Number(value)) {
        abstractControl.setErrors({ invalidNo: true });
        return;
      }
    }
  }


  @HostListener('copy', ['$event']) blockCopy(e: KeyboardEvent) {
    e.preventDefault();
  }

  @HostListener('cut', ['$event']) blockCut(e: KeyboardEvent) {
    e.preventDefault();
  }
}
