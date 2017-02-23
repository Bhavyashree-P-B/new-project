import { TestBed, inject } from '@angular/core/testing';
import { JustAddsServiceService } from './just-adds-service.service';

describe('JustAddsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JustAddsServiceService]
    });
  });

  it('should ...', inject([JustAddsServiceService], (service: JustAddsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
