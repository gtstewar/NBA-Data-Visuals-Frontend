import {Component, Input, OnInit} from '@angular/core';
import {PlayerGeneralStats} from '../../model/playerGeneralStats';
import {PlayerService} from '../../services/player.service';
import {HttpClient} from '@angular/common/http';
import {Data} from '@angular/router';

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
    this.playerService.getHomeScreenLists(this.attributes);
    this.playerService.doneGettingHomeLists.subscribe(
      (playerLists: {list: PlayerGeneralStats[], att: string}[]) => {
        for (const list of playerLists) {
          this.attLists.push(list);
          this.valid = true;
        }
      }
    );
  }

  // getTopFivePlayerByAttribute(att: string) {
  //   this.playerService.getTopPlayersByAttribute(att, 5)
  //     .subscribe((res: Response) => this.players = <Player []>res.json());
  // }
}
