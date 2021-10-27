import { Component, OnInit, Input, OnChanges, SimpleChange, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-password-strength',
  templateUrl: './admin-password-strength.component.html',
  styleUrls: ['./admin-password-strength.component.scss']
})
export class AdminPasswordStrengthComponent implements OnInit {

  @Input() public passwordToCheck: string;
  @Output() passwordStrength = new EventEmitter<boolean>();
  bar0: string;
  bar1: string;
  bar2: string;
  bar3: string;

  msg = '';
  info=true;

  private colors = ['darkred', 'orangered', 'orange', 'yellowgreen'];

  private static checkStrength(p) {
    let force = 0;
    const regex = /[$-/:-?{-~!"^_@`\[\]]/g;

    const lowerLetters = /[a-z]+/.test(p);
    const upperLetters = /[A-Z]+/.test(p);
    const numbers = /[0-9]+/.test(p);
    const symbols = regex.test(p);

    const flags = [lowerLetters, upperLetters, numbers, symbols];

    let passedMatches = 0;
    for (const flag of flags) {
      passedMatches += flag === true ? 1 : 0;
    }

    force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
    force += passedMatches * 10;

    // short password
    force = (p.length <= 7) ? Math.min(force, 10) : force;

    // poor variety of characters
    force = (passedMatches === 1) ? Math.min(force, 10) : force;
    force = (passedMatches === 2) ? Math.min(force, 20) : force;
    force = (passedMatches === 3) ? Math.min(force, 30) : force;
    force = (passedMatches === 4) ? Math.min(force, 40) : force;

    return force;
  }
  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes.passwordToCheck.currentValue;
    this.setBarColors(4, '#DDD');
    if (password) {
      const c = this.getColor(AdminPasswordStrengthComponent.checkStrength(password));
      this.setBarColors(c.idx, c.col);

      const pwdStrength = AdminPasswordStrengthComponent.checkStrength(password);
      pwdStrength === 40 ? this.passwordStrength.emit(true) : this.passwordStrength.emit(false);

      switch (c.idx) {
        case 1:
          this.msg = 'Password Poor';
          this.info = true;
          break;
        case 2:
          this.msg = 'Password Not Good';
          this.info = true;
          break;
        case 3:
          this.msg = 'Password Average';
          this.info = true;
          break;
        case 4:
          this.msg = 'Password Good';
          this.info = false;
          break;
      }
    } else {
      this.msg = '';
    }
  }


  private getColor(s) {
    let idx = 0;
    if (s <= 10) {
        idx = 0;
    } else if (s <= 20) {
        idx = 1;
    } else if (s <= 30) {
        idx = 2;
    } else if (s <= 40) {
        idx = 3;
    } else {
        idx = 4;
    }
    return {
        idx: idx + 1,
        col: this.colors[idx]
    };
  }

  private setBarColors(count, col) {
    for (let n = 0; n < count; n++) {
        this['bar' + n] = col;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

