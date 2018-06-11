import {Component, Input, OnInit} from '@angular/core';
import {PlayerGeneralStats} from '../../../../model/playerGeneralStats';

@Component({
  selector: 'app-home-player-link',
  templateUrl: './home-player-link.component.html',
  styleUrls: ['./home-player-link.component.css']
})
export class HomePlayerLinkComponent implements OnInit {

  @Input()
  player: PlayerGeneralStats;
  @Input()
  index: number;
  @Input()
  attribute: string;

  constructor() { }

  ngOnInit() {
  }

}
