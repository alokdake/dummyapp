import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.page.html',
  styleUrls: ['./grid.page.scss'],
})
export class GridPage implements OnInit {
  constructor() {}

  ngOnInit() {
    this.getItems();
  }
  items: any = [];

  getItems() {
    const item = this.items.length + 1;
    for (let i = 0; i < 11; i++) {
      this.items.push(`Item ${item + i}`); // ts to html code
    }
  }

  ionInfiniteScroll(event: any) {
    this.getItems();
    setTimeout(() => {
      (event as InfiniteScrollCustomEvent).target.complete();
    });
  }
}
