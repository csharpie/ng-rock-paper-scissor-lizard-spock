import { Injectable } from '@angular/core';

@Injectable()
export class BotHandService {

  constructor() { }

  getRandomHand() {
    return Math.floor(Math.random() * (4 - 0 + 1) + 0);
  }

}
