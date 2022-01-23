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
  // form removed
  table_headers: string[] = ['TEAM', 'PLD', 'NET RR', 'PTS', 'FORM'];
  team_values: any[] = [
    {
      name: 'DC',
      played: '14',
      netrr: '+0.481',
      pts: '20',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Roundsmall/DCroundsmall.png',
      form: ['L', 'W', 'W'],
    },
    {
      name: 'CSK',
      played: '14',
      netrr: '+0.455',
      pts: '18',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Roundsmall/Group+6339.png',
      form: ['L', 'L', 'L'],
    },
    {
      name: 'RCB',
      played: '14',
      netrr: '-0.140',
      pts: '18',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Roundsmall/RCBroundsmall.png',
      form: ['W', 'L', 'W'],
    },
    {
      name: 'MI',
      played: '14',
      netrr: '+0.116',
      pts: '14',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Roundsmall/MIroundsmall.png',
      form: ['W', 'W', 'L'],
    },
    {
      name: 'RR',
      played: '14',
      netrr: '-0.993',
      pts: '10',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Roundsmall/RRroundsmall.png',
      form: ['L', 'L', 'W'],
    },
    {
      name: 'PBKS',
      played: '14',
      netrr: '-0.001',
      pts: '12',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Roundsmall/PBKSroundsmall.png',
      form: ['W', 'L', 'W'],
    },
    {
      name: 'KKR',
      played: '14',
      netrr: '+0.587',
      pts: '14',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Roundsmall/KKRroundsmall.png',
      form: ['W', 'W', 'L'],
    },
    {
      name: 'SRH',
      played: '14',
      netrr: '-0.545',
      pts: '6',
      logo: 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Roundsmall/SRHroundsmall.png',
      form: ['L', 'W', 'L'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
