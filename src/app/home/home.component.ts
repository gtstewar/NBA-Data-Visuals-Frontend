import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../shared/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player = new Player();

  constructor(private playerService: PlayerService) {
    this.playerService.getPlayerByName('Andrew Wiggins')
      .subscribe((data: Player) => this.player = {
        player_name: data['player_name'],
        player_id:  data['player_id']
      });
  }

  ngOnInit() {
  }

}
