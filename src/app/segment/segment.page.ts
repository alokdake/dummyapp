import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  developers = [
    {
      name: 'Alok',
      role: 'coder',
    },
    {
      name: 'onkar',
      role: 'analyst',
    },
    {
      name: 'virat',
      role: 'testing',
    },
    {
      name: 'rohit',
      role: 'coder',
    },
  ];

  selectRole(event: any) {
    console.log(event.target.value);
  }
}
