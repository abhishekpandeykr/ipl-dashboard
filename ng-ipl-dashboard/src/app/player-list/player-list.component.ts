import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.scss'],
})
export class PlayerListComponent implements OnInit {
  players: any = [];
  constructor(
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.authService
      .getAllPlayers()
      .pipe(
        map((ele: any) => {
          const new_players = ele.players.filter(
            (data: any) => data.base_salary_in_lakhs > 0
          );
          return new_players;
        })
      )
      .subscribe((data) => {
        this.players = data;
      });
  }

  editPlayer = (player: any) => {
    this.router.navigateByUrl(`/player-list/${player.list_sr_no}`, {
      state: { player },
    });
  };
}
