import {Component, Input, OnInit} from '@angular/core';
import {Player} from '../../shared/player';
import {PlayerService} from '../../services/player.service';

@Component({
  selector: 'app-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.css']
})
export class HomePlayersComponent implements OnInit {

  @Input()
  attribute: string;

  players: Player[];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getTopFivePlayerByAttribute(this.attribute);
  }

  getTopFivePlayerByAttribute(att: string) {
    this.playerService.getTopPlayersByAttribute(att, 5)
      .subscribe((res: Response) => this.players = <Player []>res.json());
  }
}
