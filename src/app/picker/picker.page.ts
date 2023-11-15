import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
  selector: 'app-picker',
  templateUrl: './picker.page.html',
  styleUrls: ['./picker.page.scss'],
})
export class PickerPage implements OnInit {
  constructor(private pickerctrl: PickerController) {}

  ngOnInit() {}

  async ionPicker() {
    const picker = await this.pickerctrl.create({
      columns: [
        {
          name: 'Cars',
          options: [
            {
              text: 'Alto',
              value: 'alto',
            },
            {
              text: 'BMW',
              value: 'bmw',
            },
            {
              text: 'Swift',
              value: 'swift',
            },
            {
              text: 'Audi',
              value: 'audi',
            },
          ],
        },
        {
          name: 'Accesories',
          options: [
            {
              text: 'Sunroof',
              value: 'sunroof',
            },
            {
              text: 'Headlight',
              value: 'headlight',
            },
            {
              text: 'Horn',
              value: 'horn',
            },
            {
              text: 'alloyWheels',
              value: 'alloywheels',
            },
          ],
        },
        {
          name: 'Model',
          options: [
            {
              text: 'VXI',
              value: 'vxi',
            },
            {
              text: 'VDI',
              value: 'vdi',
            },
            {
              text: 'ZXI',
              value: 'zxi',
            },
            {
              text: 'CDI',
              value: 'cdi',
            },
          ],
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: (value) => {
            window.alert(
              `You Have Selected a ${value.Cars.value} with ${value.Accesories.value} in ${value.Model.value} Model`
            );
          },
        },
      ],
    });

    await picker.present();
  }
}
