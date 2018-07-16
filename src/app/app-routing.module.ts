import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HomePlayersComponent} from './home/home-players/home-players.component';
import {HomeTeamComponent} from './home/home-team/home-team.component';
import {resolve} from 'url';
import {PlayerHomeResolveServiceService} from './services/player-home-resolve-service.service';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, children:
      [{path: 'players', component: HomePlayersComponent, resolve: {playerLists: PlayerHomeResolveServiceService}},
        {path: 'team', component: HomeTeamComponent}],
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {}
