import { TestBed } from '@angular/core/testing';

import { ImageservService } from './imageserv.service';

describe('ImageservService', () => {
  let service: ImageservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
