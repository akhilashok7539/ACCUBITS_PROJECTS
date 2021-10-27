import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  supportLanguages=['en','por','es']
  constructor() { }
}
