import {Component, Input, OnInit} from '@angular/core';
import {PlayerGeneralStats} from '../../model/playerGeneralStats';
import {PlayerService} from '../../services/player.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.css']
})
export class HomePlayersComponent implements OnInit {

  attributes: string[] = ['pts', 'reb', 'ast', 'stl', 'blk', 'blka', 'w', 'oreb', 'dreb', 'tov', 'plus_minus' ];

  attLists: {list: PlayerGeneralStats[], att: string}[] = [];

  valid = false;

  constructor(private playerService: PlayerService) {}

  ngOnInit() {
    this.playerService.doneGettingGeneralStats.subscribe(
      () => {
        console.log(this.playerService.playerGeneralStats.length);
        this.attLists = this.playerService.getTopPlayersByAttributes(this.attributes, 5);
        this.valid = true;
      });
  }

  // getTopFivePlayerByAttribute(att: string) {
  //   this.playerService.getTopPlayersByAttribute(att, 5)
  //     .subscribe((res: Response) => this.players = <Player []>res.json());
  // }
}
