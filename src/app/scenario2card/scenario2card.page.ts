import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-scenario2card',
  templateUrl: './scenario2card.page.html',
  styleUrls: ['./scenario2card.page.scss'],
})
export class Scenario2cardPage implements OnInit {
  constructor(private storage: IonicStorageService) {}

  information: any;

  ngOnInit() {
    this.storage.get('userData').then((data: any) => {
      this.information = data;
      console.log(this.information);
    });
  }
}
