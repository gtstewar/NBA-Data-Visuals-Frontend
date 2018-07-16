import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {PlayerService} from '../services/player.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['home', 'players']);
  }
}
