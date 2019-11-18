import { TestBed } from '@angular/core/testing';

import { StarWarsApiServiceService } from './star-wars-api-service.service';

describe('StarWarsApiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarWarsApiServiceService = TestBed.get(StarWarsApiServiceService);
    expect(service).toBeTruthy();
  });
});
