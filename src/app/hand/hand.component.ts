import { Component, OnInit } from '@angular/core';

import { BotHandService } from '../shared/services/bot-hand.service';
import { RankService } from '../shared/services/rank.service';

import { HandChoiceEnum } from '../shared/models/handChoiceEnum';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.sass']
})
export class HandComponent implements OnInit {
  selectedValue: HandChoice;
  winnerStatus: string = undefined;
  show: boolean = true;

  botSelectedValue: number;

  handChoices:HandChoice[];


  onChange(event): any {
    var handIcon: any = document.getElementById("handIcon");
    var botHandIcon: any = document.getElementById("botHandIcon");

    var playerHandChoiceId: number = this.selectedValue.choiceId;
    this.botSelectedValue = this.botHandService.getRandomHand();

    this.setHandIcon(handIcon, playerHandChoiceId);
    this.setHandIcon(botHandIcon, this.botSelectedValue);

    document.getElementById("handShakeIcon").classList.add("text-hide");

    this.setWinnerStatus(playerHandChoiceId, this.botSelectedValue);
    this.resetSelectedValues();
    this.show = false;
  }

  private setHandIcon(elem: any, handChoiceId: number) {
    var handIcon_classList: any = elem.classList;
    var handIconClassNames: string[] = [ "fa-hand-rock-o", "fa-hand-paper-o", "fa-hand-scissors-o", "fa-hand-lizard-o", "fa-hand-spock-o" ];

    handIconClassNames.forEach(element => {
      handIcon_classList.remove(element);
    });

    handIcon_classList.add(handIconClassNames[handChoiceId])
  }

  private setWinnerStatus(playerHand: number, botHand: number) {
    var winnerStatusNumberified = this.rankService.getWinner(playerHand, botHand);

    switch(winnerStatusNumberified) {
      case 0:
        this.winnerStatus = "Winner!!!";
        break;
      case 1:
        this.winnerStatus = "Loser!!!";
        break;
      case 2:
        this.winnerStatus = "Tie!!!";
        break;
    }
  }

  private resetSelectedValues(): void {
    this.botSelectedValue = null;
    this.selectedValue = null;
  }

  constructor(private botHandService: BotHandService, private rankService: RankService ) { 

  this.handChoices = [
      { choice: "Rock", choiceId: HandChoiceEnum.Rock },
      { choice: "Paper", choiceId: HandChoiceEnum.Paper },
      { choice: "Scissors", choiceId: HandChoiceEnum.Scissors },
      { choice: "Lizard", choiceId: HandChoiceEnum.Lizard },
      { choice: "Spock", choiceId: HandChoiceEnum.Spock }
    ];
  }

  ngOnInit() {
  }

}
