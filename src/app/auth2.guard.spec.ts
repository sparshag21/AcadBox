import { TestBed, async, inject } from '@angular/core/testing';

import { Auth2Guard } from './auth2.guard';

describe('Auth2Guard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth2Guard]
    });
  });

  it('should ...', inject([Auth2Guard], (guard: Auth2Guard) => {
    expect(guard).toBeTruthy();
  }));
});
