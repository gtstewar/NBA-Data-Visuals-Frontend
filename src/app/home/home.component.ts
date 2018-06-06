import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../services/player.service';
import { Player } from '../shared/player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  player_attributes: String[] = ['pts', 'reb', 'ast', 'to', 'stl'];

  constructor() {
  }

  ngOnInit() {}
}
