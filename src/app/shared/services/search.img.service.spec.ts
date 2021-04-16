import { TestBed } from '@angular/core/testing';

import { SearchImgService } from './search.img.service';

describe('SearchService', () => {
  let service: SearchImgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchImgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
