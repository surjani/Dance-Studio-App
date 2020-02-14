import { TestBed } from '@angular/core/testing';

import { ChoreographerServiceService } from './choreographer-service.service';

describe('ChoreographerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChoreographerServiceService = TestBed.get(ChoreographerServiceService);
    expect(service).toBeTruthy();
  });
});
