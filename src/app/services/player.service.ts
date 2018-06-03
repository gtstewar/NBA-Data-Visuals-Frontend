import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PlayerService {

  playerUrl = 'http://localhost:8080/api/player/';
  playersUrl = 'api/players';
  constructor(private http: HttpClient) {}

  getPlayerByName(player_name: string) {
    return this.http.get(this.playerUrl + player_name);
  }



}
