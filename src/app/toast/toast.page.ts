import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  constructor(private toaster: ToastController) {}

  ngOnInit() {}
  async showToast() {
    const toast = await this.toaster.create({
      message: 'This is Toaster',
      duration: 2000,
      position: 'bottom', //middle,top,bottom
    });
    await toast.present();
  }
}
