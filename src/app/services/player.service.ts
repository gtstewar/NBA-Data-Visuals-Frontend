import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {PlayerGeneralStats} from '../model/playerGeneralStats';

@Injectable()
export class PlayerService {

  generalStatsFinished = new EventEmitter<{ list: PlayerGeneralStats[], attribute: string }>();

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

  getHomeScreenLists(attributes: string[]) {
    let attParam = '';
    for (const att of attributes) {
      attParam += att + ',';
    }
    attParam = attParam.slice(0, attParam.length - 1);
    const playerLists: {list: PlayerGeneralStats[], att: string}[] = [];
    let playerList: PlayerGeneralStats[] = [];
    const playerResponse = this.http.get(this.homeScreenUrl, {params: {attributes: attParam}}).subscribe(
      (statsList: Object) => {
        let i = 0;
        let k = 0;
        while (statsList[i] != null) {
          const attribute = attributes[i];
          playerList = [];
          k = 0;
          while (statsList[i][k] != null) {
            // console.log(i + '. ' + statsList[i]['player_name']);
            playerList.push(new PlayerGeneralStats(
              statsList[i][k]['player_name'],
              statsList[i][k]['player']['player_id'],
              statsList[i][k]['team_ab'],
              statsList[i][k]['age'],
              statsList[i][k]['gp'],
              statsList[i][k]['w'],
              statsList[i][k]['l'],
              statsList[i][k]['win_pct'],
              statsList[i][k]['min'],
              statsList[i][k]['fgm'],
              statsList[i][k]['fga'],
              statsList[i][k]['fg_pct'],
              statsList[i][k]['fg3m'],
              statsList[i][k]['fg3a'],
              statsList[i][k]['fg3_pct'],
              statsList[i][k]['ftm'],
              statsList[i][k]['fta'],
              statsList[i][k]['ft_pct'],
              statsList[i][k]['oreb'],
              statsList[i][k]['dreb'],
              statsList[i][k]['reb'],
              statsList[i][k]['ast'],
              statsList[i][k]['tov'],
              statsList[i][k]['stl'],
              statsList[i][k]['blk'],
              statsList[i][k]['blka'],
              statsList[i][k]['pf'],
              statsList[i][k]['pfd'],
              statsList[i][k]['pts'],
              statsList[i][k]['plus_minus'],
              statsList[i][k]['nba_fantasy_pts'],
              statsList[i][k]['dd2'],
              statsList[i][k]['td3'],
              statsList[i][k]['gp_rank'],
              statsList[i][k]['w_rank'],
              statsList[i][k]['l_rank'],
              statsList[i][k]['win_pct_rank'],
              statsList[i][k]['min_rank'],
              statsList[i][k]['fgm_rank'],
              statsList[i][k]['fga_rank'],
              statsList[i][k]['fg_pct_rank'],
              statsList[i][k]['fg3m_rank'],
              statsList[i][k]['fg3a_rank'],
              statsList[i][k]['fg3_pct_rank'],
              statsList[i][k]['ftm_rank'],
              statsList[i][k]['fta_rank'],
              statsList[i][k]['ft_pct_rank'],
              statsList[i][k]['oreb_rank'],
              statsList[i][k]['dreb_rank'],
              statsList[i][k]['reb_rank'],
              statsList[i][k]['ast_rank'],
              statsList[i][k]['tov_rank'],
              statsList[i][k]['stl_rank'],
              statsList[i][k]['blk_rank'],
              statsList[i][k]['blka_rank'],
              statsList[i][k]['pf_rank'],
              statsList[i][k]['pfd_rank'],
              statsList[i][k]['pts_rank'],
              statsList[i][k]['plus_minus_rank'],
              statsList[i][k]['nba_fantasy_pts_rank'],
              statsList[i][k]['dd2_rank'],
              statsList[i][k]['td3_rank']
            ))
            ;
            k++;


          }
          console.log(playerList);
          playerLists.push({list: playerList, att: attribute});
          i++;
        }
        this.doneGettingHomeLists.emit(playerLists);
        return playerLists;
      }
    );
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
