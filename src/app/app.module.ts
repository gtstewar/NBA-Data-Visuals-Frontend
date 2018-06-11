import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import {PlayerService} from './services/player.service';
import { HomePlayersComponent } from './home/home-players/home-players.component';
import { HomeTeamComponent } from './home/home-team/home-team.component';
import {AppRoutingModule} from './app-routing.module';
import { HomePlayerLinkComponent } from './home/home-players/home-player-card/home-player-link/home-player-link.component';
import { HomeTeamLinkComponent } from './home/home-team/home-team-link/home-team-link.component';
import { HomePlayerCardComponent } from './home/home-players/home-player-card/home-player-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    HomePlayersComponent,
    HomeTeamComponent,
    HomePlayerLinkComponent,
    HomeTeamLinkComponent,
    HomePlayerCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
