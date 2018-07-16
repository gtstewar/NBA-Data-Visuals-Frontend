import {Player} from './player';

export class PlayerGeneralStats {
  public id: number;
  public player: Player;
  public player_name: string;
  public team_ab: string;
  public age: number;
  public gp: number;
  public w: number;
  public l: number;
  public win_pct: number;
  public min: number;
  public fgm: number;
  public fga: number;
  public fg_pct: number;
  public fg3m: number;
  public fg3a: number;
  public fg3_pct: number;
  public ftm: number;
  public fta: number;
  public ft_pct: number;
  public oreb: number;
  public dreb: number;
  public reb: number;
  public ast: number;
  public tov: number;
  public stl: number;
  public blk: number;
  public blka: number;
  public pf: number;
  public pfd: number;
  public pts: number;
  public plus_minus: number;
  public nba_fantasy_pts: number;
  public dd2: number;
  public td3: number;

  constructor(
              id: number,
              player: Player,
              player_name: string,
              team_ab: string,
              age: number,
              gp: number,
              w: number,
              l: number,
              win_pct: number,
              min: number,
              fgm: number,
              fga: number,
              fg_pct: number,
              fg3m: number,
              fg3a: number,
              fg3_pct: number,
              ftm: number,
              fta: number,
              ft_pct: number,
              oreb: number,
              dreb: number,
              reb: number,
              ast: number,
              tov: number,
              stl: number,
              blk: number,
              blka: number,
              pf: number,
              pfd: number,
              pts: number,
              plus_minus: number,
              nba_fantasy_pts: number,
              dd2: number,
              td3: number
  ) {
    this.id = id;
    this.player = player;
    this.player_name = player_name;
    this.team_ab = team_ab;
    this.age = age;
    this.gp = gp;
    this.w = w;
    this.l = l;
    this.win_pct = win_pct;
    this.min = min;
    this.fgm = fgm;
    this.fga = fga;
    this.fg_pct = fg_pct;
    this.fg3m = fg3m;
    this.fg3a = fg3a;
    this.fg3_pct = fg3_pct;
    this.ftm = ftm;
    this.fta = fta;
    this.ft_pct = ft_pct;
    this.oreb = oreb;
    this.dreb = dreb;
    this.reb = reb;
    this.ast = ast;
    this.tov = tov;
    this.stl = stl;
    this.blk = blk;
    this.blka = blka;
    this.pf = pf;
    this.pfd = pfd;
    this.pts = pts;
    this.plus_minus = plus_minus;
    this.nba_fantasy_pts = nba_fantasy_pts;
    this.dd2 = dd2;
    this.td3 = td3;
  }
}
