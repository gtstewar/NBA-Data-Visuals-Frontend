import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PlayerGeneralStats} from '../model/playerGeneralStats';

@Injectable()
export class PlayerService {

  generalStatsFinished = new EventEmitter<{ list: PlayerGeneralStats[], attribute: string }>();

  playerUrl = 'http://localhost:8080/api/player/';
  generalStatsByAttributeUrl = 'http://localhost:8080/api/players/top/';
  allGeneralStatsUrl = 'http://localhost:8080/api/players/gen/all';
  playerGeneralStats: PlayerGeneralStats[] = [];
  doneGettingGeneralStats = new EventEmitter<void>();

  constructor(private http: HttpClient) {
    this.getAllGeneralStats();
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

  getAllGeneralStats() {
    const playerList: PlayerGeneralStats[] = [];
    const playerResponse = this.http.get(this.allGeneralStatsUrl).subscribe(
      (statsList: Object) => {
        let i = 0;
        while (statsList[i] != null) {
          // console.log(i + '. ' + statsList[i]['player_name']);
          playerList.push(new PlayerGeneralStats(
            statsList[i]['player_name'],
            statsList[i]['player']['player_id'],
            statsList[i]['team_ab'],
            statsList[i]['age'],
            statsList[i]['gp'],
            statsList[i]['w'],
            statsList[i]['l'],
            statsList[i]['win_pct'],
            statsList[i]['min'],
            statsList[i]['fgm'],
            statsList[i]['fga'],
            statsList[i]['fg_pct'],
            statsList[i]['fg3m'],
            statsList[i]['fg3a'],
            statsList[i]['fg3_pct'],
            statsList[i]['ftm'],
            statsList[i]['fta'],
            statsList[i]['ft_pct'],
            statsList[i]['oreb'],
            statsList[i]['dreb'],
            statsList[i]['reb'],
            statsList[i]['ast'],
            statsList[i]['tov'],
            statsList[i]['stl'],
            statsList[i]['blk'],
            statsList[i]['blka'],
            statsList[i]['pf'],
            statsList[i]['pfd'],
            statsList[i]['pts'],
            statsList[i]['plus_minus'],
            statsList[i]['nba_fantasy_pts'],
            statsList[i]['dd2'],
            statsList[i]['td3'],
            statsList[i]['gp_rank'],
            statsList[i]['w_rank'],
            statsList[i]['l_rank'],
            statsList[i]['win_pct_rank'],
            statsList[i]['min_rank'],
            statsList[i]['fgm_rank'],
            statsList[i]['fga_rank'],
            statsList[i]['fg_pct_rank'],
            statsList[i]['fg3m_rank'],
            statsList[i]['fg3a_rank'],
            statsList[i]['fg3_pct_rank'],
            statsList[i]['ftm_rank'],
            statsList[i]['fta_rank'],
            statsList[i]['ft_pct_rank'],
            statsList[i]['oreb_rank'],
            statsList[i]['dreb_rank'],
            statsList[i]['reb_rank'],
            statsList[i]['ast_rank'],
            statsList[i]['tov_rank'],
            statsList[i]['stl_rank'],
            statsList[i]['blk_rank'],
            statsList[i]['blka_rank'],
            statsList[i]['pf_rank'],
            statsList[i]['pfd_rank'],
            statsList[i]['pts_rank'],
            statsList[i]['plus_minus_rank'],
            statsList[i]['nba_fantasy_pts_rank'],
            statsList[i]['dd2_rank'],
            statsList[i]['td3_rank']
          ))
          ;
          i++;
        }
        this.playerGeneralStats = playerList;
        this.doneGettingGeneralStats.emit();
        return playerList;
      }
    );
  }
}
