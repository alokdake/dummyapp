import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  Employee = [
    {
      profilepic: '../assets/Img/m.jpg.jpg',
      name: 'alok',
      job_title: 'developer',
    },
    {
      profilepic: '../assets/Img/virat.jpg.jpg',
      name: 'onkar',
      job_title: 'coder',
    },
    {
      profilepic: '../assets/Img/a.jpg.jpg',
      name: 'virat',
      job_title: 'angular',
    },
    {
      profilepic: '../assets/Img/b.jpg.jpg',
      name: 'Berlin',
      job_title: 'ionic',
    },
    {
      profilepic: '../assets/Img/c.jpg.jpg',
      name: 'Professor',
      job_title: 'react',
    },
    {
      profilepic: '../assets/Img/d.jpg.jpg',
      name: 'Tokyo',
      job_title: 'springboot',
    },
  ];
}
