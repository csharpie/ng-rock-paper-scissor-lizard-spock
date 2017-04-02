import { Component, OnInit } from '@angular/core';

import { Hand } from '../shared/models/hand';

import { BotHandService } from '../shared/services/bot-hand.service';
import { RankService } from '../shared/services/rank.service';

@Component({
  selector: 'app-hand',
  templateUrl: './hand.component.html',
  styleUrls: ['./hand.component.css']
})
export class HandComponent implements OnInit {
  selectedValue: string;
  winnerStatus: string = undefined;
  show: boolean = true;

  botSelectedValue: number;

  onclick(event): any {
    var handIcon: any = document.getElementById("handIcon");
    var botHandIcon: any = document.getElementById("botHandIcon");

    var numberifiedSelectedValue: number = Number(this.selectedValue);
    this.botSelectedValue = this.botHandService.getRandomHand();

    this.setHandIcon(handIcon, numberifiedSelectedValue);
    this.setHandIcon(botHandIcon, this.botSelectedValue);

    document.getElementById("handShakeIcon").classList.add("text-hide");

    this.setWinnerStatus(numberifiedSelectedValue, this.botSelectedValue);
    this.show = false;
  }

  private setHandIcon(elem: any, hand: number) {
    var handIcon_classList: any = elem.classList;
    var handIconClassNames: string[] = [ "fa-hand-rock-o", "fa-hand-paper-o", "fa-hand-scissors-o", "fa-hand-lizard-o", "fa-hand-spock-o" ];

    handIconClassNames.forEach(element => {
      handIcon_classList.remove(element);
    });

    switch(hand) {
      case Hand.Rock:
        handIcon_classList.add("fa-hand-rock-o");
        break;
      case Hand.Paper:
        handIcon_classList.add("fa-hand-paper-o");
        break;
      case Hand.Scissors:
        handIcon_classList.add("fa-hand-scissors-o");
        break;
      case Hand.Lizard:
        handIcon_classList.add("fa-hand-lizard-o");
        break;
      case Hand.Spock:
        handIcon_classList.add("fa-hand-spock-o");    
        break;
    }
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

  constructor(private botHandService: BotHandService, private rankService: RankService ) { }

  ngOnInit() {
  }

}
