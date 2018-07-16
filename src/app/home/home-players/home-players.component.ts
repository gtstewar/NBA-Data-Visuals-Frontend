import {Component, Input, OnInit} from '@angular/core';
import {PlayerGeneralStats} from '../../model/playerGeneralStats';
import {PlayerService} from '../../services/player.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, ActivatedRouteSnapshot, Data, Router} from '@angular/router';

@Component({
  selector: 'app-home-players',
  templateUrl: './home-players.component.html',
  styleUrls: ['./home-players.component.css']
})
export class HomePlayersComponent implements OnInit {

  attributes: string[];

  playerLists: PlayerGeneralStats[][];

  public valid = false;

  constructor(private playerService: PlayerService, private activeRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.attributes = this.playerService.attributes;
    const route = this.activeRoute.snapshot;
    this.playerLists = route.data['playerLists'];
  }
}
