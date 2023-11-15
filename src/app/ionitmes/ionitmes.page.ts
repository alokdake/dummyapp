import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ionitmes',
  templateUrl: './ionitmes.page.html',
  styleUrls: ['./ionitmes.page.scss'],
})
export class IonitmesPage implements OnInit {
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertctrl: AlertController
  ) {}

  ngOnInit() {}

  cancel() {
    location.reload();
  }

  submit() {
    this.showAlert();
  }

  async showAlert() {
    const alert = await this.alertctrl.create({
      header: 'User Data Form',
      subHeader: 'Sucessfully Submited',

      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'OK',
          handler: () => {
            location.reload();
          },
        },
      ],
    });

    await alert.present();
  }
}
