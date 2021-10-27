import { TestBed } from '@angular/core/testing';

import { TwilloService } from './twillo.service';

describe('TwilloService', () => {
  let service: TwilloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwilloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
