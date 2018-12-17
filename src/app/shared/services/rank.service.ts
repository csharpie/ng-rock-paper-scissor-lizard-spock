import { Injectable } from '@angular/core';

import { HandChoiceEnum } from '../models/handChoiceEnum';

@Injectable()
export class RankService {

  getWinner(playerHandChoiceId: number, botHandChoiceId: number) {
    if (playerHandChoiceId === botHandChoiceId) {
      return 2;
    }

    if (playerHandChoiceId === HandChoiceEnum.Scissors 
        && botHandChoiceId === HandChoiceEnum.Paper) {
          return 0;
        }
    
    else if (playerHandChoiceId === HandChoiceEnum.Paper 
        && botHandChoiceId === HandChoiceEnum.Rock) {
          return 0;
        }
    
    else if (playerHandChoiceId === HandChoiceEnum.Rock 
        && botHandChoiceId === HandChoiceEnum.Lizard) {
          return 0;
        }

    else if (playerHandChoiceId === HandChoiceEnum.Lizard 
        && botHandChoiceId === HandChoiceEnum.Spock) {
          return 0;
        }

    else if (playerHandChoiceId === HandChoiceEnum.Spock 
        && botHandChoiceId === HandChoiceEnum.Scissors) {
          return 0;
        }
    
    else if (playerHandChoiceId === HandChoiceEnum.Scissors 
        && botHandChoiceId === HandChoiceEnum.Lizard) {
          return 0;
        }
    
    else if (playerHandChoiceId === HandChoiceEnum.Lizard 
        && botHandChoiceId === HandChoiceEnum.Paper) {
          return 0;
        }

    else if (playerHandChoiceId === HandChoiceEnum.Paper 
        && botHandChoiceId === HandChoiceEnum.Spock) {
          return 0;
        }
    
    else if (playerHandChoiceId === HandChoiceEnum.Spock 
        && botHandChoiceId === HandChoiceEnum.Rock) {
          return 0;
        }

    else if (playerHandChoiceId === HandChoiceEnum.Rock 
        && botHandChoiceId === HandChoiceEnum.Scissors) {
          return 0;
        }
    
    else {
      return 1;
    }
  
  }

  constructor() { }

}
