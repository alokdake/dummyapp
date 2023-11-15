import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-scenario1',
  templateUrl: './scenario1.page.html',
  styleUrls: ['./scenario1.page.scss'],
})
export class Scenario1Page implements OnInit {
  constructor(private storage: IonicStorageService, private router: Router) {}

  ngOnInit() {}

  Developers = [
    {
      name: 'Alok Dake',
      role: 'Coder',
      language: 'Typescript',
      email: 'alokdake2003@gmail.com',
      location: 'Solapur',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Onkar Zende',
      role: 'Testing',
      language: 'HTML',
      email: 'onkarzende@gmail.com',
      location: 'Solapur',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Virat Kohli',
      role: 'UI',
      language: 'CSS',
      email: 'viratkohli@gmail.com',
      location: 'Delhi',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Tarak Mehta',
      role: 'UX',
      language: 'CSS',
      email: 'tarak@gmail.com',
      location: 'Mumbai',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Rohit Sharma',
      role: 'Backend',
      language: 'JAVA',
      email: 'rohit@gmail.com',
      location: 'Mumbai',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Surya Yadav',
      role: 'DBMS',
      language: 'SQL',
      email: 'surya@gmail.com',
      location: 'Pune',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Hardik Pandya',
      role: 'Web-Developer',
      language: 'Javascript',
      email: 'hardik@gmail.com',
      location: 'Gujrat',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Jaspreet Sir',
      role: 'UI/UX',
      language: 'CSS & Bootstrap',
      email: 'jaspreet@gmail.com',
      location: 'Delhi',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Axar Patel',
      role: 'Data Analysis',
      language: 'Python',
      email: 'axar@gmail.com',
      location: 'Gujrat',
      profilePic: '../assets/Img/smile.png',
    },
    {
      name: 'Anushka Sharma',
      role: 'App-Developer',
      language: 'Typescript',
      email: 'anushka@gmail.com',
      location: 'Panjab',
      profilePic: '../assets/Img/smile.png',
    },
  ];

  fire(item: any) {
    console.log(item);
    this.storage
      .store('information', JSON.stringify(item))
      .then((data: any) => {
        console.log(data);
        this.router.navigate(['/viewinfo']);
      });
  }
}
