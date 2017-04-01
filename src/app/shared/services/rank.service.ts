import { Injectable } from '@angular/core';

import { Hand } from '../../shared/models/hand';

@Injectable()
export class RankService {

  getWinner(playerHand: number, botHand: number) {
    if (playerHand === botHand) {
      return 2;
    }

    var playerHandEnumKey: any = Hand[Hand[playerHand]];
    var botHandEnumKey: any = Hand[Hand[botHand]];
    
    if (playerHandEnumKey === Hand.Scissors 
        && botHandEnumKey === Hand.Paper) {
          return 0;
        }
    
    else if (playerHandEnumKey === Hand.Paper 
        && botHandEnumKey === Hand.Rock) {
          return 0;
        }
    
    else if (playerHandEnumKey === Hand.Rock 
        && botHandEnumKey === Hand.Lizard) {
          return 0;
        }

    else if (playerHandEnumKey === Hand.Lizard 
        && botHandEnumKey === Hand.Spock) {
          return 0;
        }

    else if (playerHandEnumKey === Hand.Spock 
        && botHandEnumKey === Hand.Scissors) {
          return 0;
        }
    
    else if (playerHandEnumKey === Hand.Scissors 
        && botHandEnumKey === Hand.Lizard) {
          return 0;
        }
    
    else if (playerHandEnumKey === Hand.Lizard 
        && botHandEnumKey === Hand.Paper) {
          return 0;
        }

    else if (playerHandEnumKey === Hand.Paper 
        && botHandEnumKey === Hand.Spock) {
          return 0;
        }
    
    else if (playerHandEnumKey === Hand.Spock 
        && botHandEnumKey === Hand.Rock) {
          return 0;
        }

    else if (playerHandEnumKey === Hand.Rock 
        && botHandEnumKey === Hand.Scissors) {
          return 0;
        }
    
    else {
      return 1;
    }
  
  }

  constructor() { }

}
