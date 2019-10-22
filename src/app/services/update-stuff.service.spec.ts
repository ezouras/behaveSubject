import { TestBed } from '@angular/core/testing';

import { UpdateStuffService } from './update-stuff.service';

describe('UpdateStuffService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateStuffService = TestBed.get(UpdateStuffService);
    expect(service).toBeTruthy();
  });
});
