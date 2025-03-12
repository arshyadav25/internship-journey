import { TestBed } from '@angular/core/testing';

import { SerivesService } from './serives.service';

describe('SerivesService', () => {
  let service: SerivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
