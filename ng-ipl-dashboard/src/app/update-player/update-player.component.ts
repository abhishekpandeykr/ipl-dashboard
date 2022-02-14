import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { NavigationStart, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-update-player',
  templateUrl: './update-player.component.html',
  styleUrls: ['./update-player.component.scss'],
})
export class UpdatePlayerComponent implements OnInit {
  currentPlayer = {} as any;

  playerForm: FormGroup = this.fb.group({
    fullName: [''],
    country: [''],
    sold_to_team: [''],
    sold_to_team_price: [''],
  });
  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    const location: any = this.location.getState();
    this.currentPlayer = location.player;
    console.log(this.currentPlayer, location);
    this.setFormValues(this.currentPlayer);
    if (Object.keys(this.currentPlayer).length) {
      console.log(this.currentPlayer, this.currentPlayer.country);
      this.playerForm.get('country')?.setValue(this.currentPlayer.country);
    }
  }

  setFormValues(currentPlayer: any) {
    if (currentPlayer.country) {
      setTimeout(() => {
        this.playerForm.get('country')?.setValue(currentPlayer.country);
        this.playerForm.patchValue({
          fullName: `${currentPlayer.first_Name} ${currentPlayer.surname}`,
          country: currentPlayer.country,
          sold_to_team: currentPlayer.sold_to_team,
          sold_to_team_price: currentPlayer.sold_to_team_price,
        });
      }, 100);
    }
  }

  updatePlayer = () => {
    const id = this.currentPlayer.list_sr_no;
    const { fullName, country, ...body } = this.playerForm.value;
    this.authService.updatePlayer(id, body).subscribe((data) => {
      console.log(data);
      this.location.back();
    });
  };
}
