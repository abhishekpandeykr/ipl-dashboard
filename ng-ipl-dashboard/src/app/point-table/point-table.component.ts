import { Component, OnInit } from '@angular/core';

enum TABLE_TYPES {
  standing = 'STANDING',
  playoff = 'PLAYOFFS',
}

@Component({
  selector: 'app-point-table',
  templateUrl: './point-table.component.html',
  styleUrls: ['./point-table.component.scss'],
})
export class PointTableComponent implements OnInit {
  currentTable: TABLE_TYPES = TABLE_TYPES.standing;
  table_headers: string[] = ['TEAM', 'PLD', 'NET RR', 'PTS', 'FORM'];
  team_values: string[] = ['DC', '14', '+0.481', '20', 'LLWW'];
  constructor() {}

  ngOnInit(): void {}
}
