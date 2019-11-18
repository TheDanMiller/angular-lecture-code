import { TestBed } from '@angular/core/testing';

import { SwapiExampleService } from './swapi-example.service';

describe('SwapiExampleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SwapiExampleService = TestBed.get(SwapiExampleService);
    expect(service).toBeTruthy();
  });
});
