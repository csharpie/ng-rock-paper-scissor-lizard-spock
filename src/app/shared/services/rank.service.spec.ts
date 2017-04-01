import { TestBed, inject } from '@angular/core/testing';
import { RankService } from './rank.service';

describe('RankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RankService]
    });
  });

  it('should ...', inject([RankService], (service: RankService) => {
    expect(service).toBeTruthy();
  }));
});
