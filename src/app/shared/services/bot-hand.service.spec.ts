import { TestBed, inject } from '@angular/core/testing';
import { BotHandService } from './bot-hand.service';

describe('BotHandService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BotHandService]
    });
  });

  it('should ...', inject([BotHandService], (service: BotHandService) => {
    expect(service).toBeTruthy();
  }));
});
