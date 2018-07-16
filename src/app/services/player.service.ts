import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PlayerGeneralStats} from '../model/playerGeneralStats';
import {Observable} from 'rxjs';

@Injectable()
export class PlayerService {

  generalStatsFinished = new EventEmitter<{ list: PlayerGeneralStats[], attribute: string }>();

  attributes: string[] = ['pts', 'reb', 'ast', 'stl', 'blk', 'blka', 'w', 'oreb', 'dreb', 'tov', 'plus_minus' ];

  playerUrl = 'http://localhost:8080/api/player/';
  homeScreenUrl = 'http://localhost:8080/api/players/gen/home/atts';
  allGeneralStatsUrl = 'http://localhost:8080/api/players/gen/all';
  playerGeneralStats: PlayerGeneralStats[] = [];
  doneGettingGeneralStats = new EventEmitter<void>();
  doneGettingHomeLists = new EventEmitter<{list: PlayerGeneralStats[], att: string}[]>();

  constructor(private http: HttpClient) {
  }

  getPlayerByName(player_name: string) {
    return this.http.get(this.playerUrl + player_name);
  }

  getInstance() {
    return new PlayerService(this.http);
  }

  getTopPlayersByAttributes(atts: string[], top: number) {
    const attributeLists: {list: PlayerGeneralStats[], att: string}[] = [];
    for (const att of atts) {
      const attRank = att + '_rank';
      const attlist: {list: PlayerGeneralStats[], att: string} = {list: [], att: att};
      for (let i = 0; i < top; i++) {
        for (const player of this.playerGeneralStats) {
          if(player[attRank] === i + 1) {
            console.log(attRank + '  in loop');
            attlist['list'].push(player);
          }
        }
      }
      attributeLists.push(attlist);
    }
    console.log(attributeLists);
    return attributeLists;
  }

  getHomeScreenLists(attributes: string[]): Observable<PlayerGeneralStats[][]> {
    let attParam = '';
    for (const att of attributes) {
      attParam += att + ',';
    }
    attParam = attParam.slice(0, attParam.length - 1);
    const playerLists: {list: PlayerGeneralStats[], att: string}[] = [];
    return this.http.get<PlayerGeneralStats[][]>(this.homeScreenUrl, {params: {attributes: attParam}});
  }
}
