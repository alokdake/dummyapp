import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {
  constructor() {}

  ngOnInit() {}
  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
  }

  doReorder(event: CustomEvent<ItemReorderEventDetail>) {
    console.log(
      'Dragged from the index',
      event.detail.from,
      'To',
      event.detail.to
    );
    event.detail.complete();
  }
}
