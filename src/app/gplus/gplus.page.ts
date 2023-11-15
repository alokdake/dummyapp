import { Component, OnInit } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { isPlatform } from '@ionic/angular';
import '@codetrix-studio/capacitor-google-auth';

@Component({
  selector: 'app-gplus',
  templateUrl: './gplus.page.html',
  styleUrls: ['./gplus.page.scss'],
})
export class GplusPage implements OnInit {
  user: any;

  constructor() {
    if (!isPlatform('capacitor')) {
      GoogleAuth.initialize();
    }
  }

  ngOnInit() {}

  async signIn() {
    this.user = await GoogleAuth.signIn();
    console.log('Logged In User Details', this.user);
  }
  async signOut() {
    await GoogleAuth.signOut();
    this.user = null;
  }
  async refresh() {
    const aCode = await GoogleAuth.refresh();
    console.log('Refresh', aCode);
  }
}
