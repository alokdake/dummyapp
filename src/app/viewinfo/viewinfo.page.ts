import { Component, OnInit } from '@angular/core';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-viewinfo',
  templateUrl: './viewinfo.page.html',
  styleUrls: ['./viewinfo.page.scss'],
})
export class ViewinfoPage implements OnInit {
  constructor(private storage: IonicStorageService) {}

  devel: any;

  ngOnInit() {
    this.storage.get('information').then((data: any) => {
      this.devel = JSON.parse(data);
      console.log(this.devel);
    });
  }
}
