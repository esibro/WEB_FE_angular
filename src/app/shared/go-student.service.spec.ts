import { TestBed } from '@angular/core/testing';

import { GoStudentService } from './go-student.service';

describe('GoStudentService', () => {
  let service: GoStudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoStudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
