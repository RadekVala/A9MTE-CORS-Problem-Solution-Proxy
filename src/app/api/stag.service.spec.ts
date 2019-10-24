import { TestBed } from '@angular/core/testing';

import { StagService } from './stag.service';

describe('StagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StagService = TestBed.get(StagService);
    expect(service).toBeTruthy();
  });
});
