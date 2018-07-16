import {Component, Input, OnInit} from '@angular/core';
import {PlayerGeneralStats} from '../../../model/playerGeneralStats';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-home-player-card',
  templateUrl: './home-player-card.component.html',
  styleUrls: ['./home-player-card.component.css'],
  providers: []
})
export class HomePlayerCardComponent implements OnInit {

  @Input()
  playerInfo: {list: PlayerGeneralStats[], att: string};

  @Input()
  players: PlayerGeneralStats[];
  @Input()
  attribute: string;

  constructor() { }

  ngOnInit() {
    console.log(this.attribute);
  }

}
