import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-module1card',
  templateUrl: './module1card.page.html',
  styleUrls: ['./module1card.page.scss'],
})
export class Module1cardPage implements OnInit {
  constructor(private storage: IonicStorageService) {}

  profileInfo: any;

  ngOnInit() {
    this.storage.get('profileData').then((data: any) => {
      this.profileInfo = data;
      console.log(this.profileInfo);
    });
  }
}
