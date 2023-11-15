import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
} from '@ionic/angular';
import { IonicStorageService } from '../storage';
import {
  ActionPerformed,
  PushNotificationSchema,
  PushNotifications,
  Token,
} from '@capacitor/push-notifications';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name = 'Alok';

  selectedDevlopers: any = [];
  constructor(
    private actionSheetCtrl: ActionSheetController,
    private alertctrl: AlertController,
    private loadingctrl: LoadingController,
    private router: Router,
    private storage: IonicStorageService
  ) {}

  //push notification code
  ngOnInit() {
    PushNotifications.requestPermissions().then((result) => {
      if (result.receive === 'granted') {
        PushNotifications.register();
      } else {
      }
    });

    PushNotifications.addListener('registration', (token: Token) => {
      //alert('Push registration success, token: ' + token.value);
    });

    PushNotifications.addListener('registrationError', (error: any) => {
      //alert('Error on registration: ' + JSON.stringify(error));
    });

    PushNotifications.addListener(
      'pushNotificationReceived',
      (notification: PushNotificationSchema) => {
        // alert('Push received: ' + JSON.stringify(notification));
      }
    );

    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      (notification: ActionPerformed) => {
        //alert('Push action performed: ' + JSON.stringify(notification));
      }
    );
  }

  Developers = [
    {
      Type: 'Angular',
      Name: 'Alok',
      isChecked: false,
    },
    {
      Type: 'Ionic',
      Name: 'Onkar',
      isChecked: false,
    },
    {
      Type: 'PHP',
      Name: 'Virat',
      isChecked: false,
    },
    {
      Type: 'Java',
      Name: 'Rohit',
      isChecked: false,
    },
    {
      Type: 'Python',
      Name: 'Dinesh',
      isChecked: false,
    },
    {
      Type: 'Swift',
      Name: 'dk',
      isChecked: false,
    },
  ];

  developersList: any = [];

  Submit() {
    this.selectedDevlopers = this.Developers.filter((value, index) => {
      return value.isChecked;
    });
    console.log(this.selectedDevlopers);

    this.Developers.forEach((item: any) => {
      if (item.isChecked == true) {
        this.developersList.push(item.Name, item.Type);
        return;
      }
    });

    this.showAlert();
  }

  async showAlert() {
    const alert = await this.alertctrl.create({
      header: 'Developers',
      subHeader: 'Selected Developers',
      message: JSON.stringify(this.developersList),
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

  Money = [
    {
      Price: '1000',
      name: 'Alok',
    },
    {
      Price: '2000',
      name: 'Onkar',
    },
    {
      Price: '3000',
      name: 'Virat',
    },
    {
      Price: '4000',
      name: 'Dhoni',
    },
    {
      Price: '5000',
      name: 'Rohit',
    },
    {
      Price: '6000',
      name: 'DK',
    },
  ];
  selectedValue: any;

  submit(item: any) {
    this.selectedValue = JSON.stringify(item);
    console.log(this.selectedValue);
  }

  async sample() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/sample']);
  }
  async picker() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/picker']);
  }
  async fab() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 500,
    });
    loader.present();
    this.router.navigate(['/fab']);
  }
  async grid() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/grid']);
  }
  async ionItem() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/ionitmes']);
  }
  async modal() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/modal']);
  }
  async popOver() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/popover']);
  }
  async refresher() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/refresher']);
  }

  async searchbar() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();

    //Localstorage in Ionic
    this.storage.store('name', this.name).then((data: any) => {
      console.log(data);
      this.router.navigate(['/searchbar']);
    });
  }
  async segment() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/segment']);
  }
  async slides() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/slides']);
  }
  async tabs() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/tabs']);
  }
  async toast() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/toast']);
  }
  async breadcrumbs() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/breadcrumbs']);
  }
  async Scenario1() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/scenario1']);
  }
  async Scenario2() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/scenario2']);
  }
  async Scenario3() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/scenario3']);
  }
  async Scenario4() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/scenario4']);
  }
  async module1() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/camerausingcapacitor']);
  }
  async module1ex() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/module1']);
  }
  async module2() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/register']);
  }
  async module3() {
    const loader = await this.loadingctrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/gplus']);
  }

  async actionSheet() {
    let actionSheet = await this.actionSheetCtrl.create({
      header: 'Wifi Connection',
      subHeader: 'Wifi Available ',
      buttons: [
        {
          text: 'Airtel Wifi', //predefine proprties of buttons is text,role,action,data,handler in that we call method
          role: 'connect',
          handler: () => {
            this.accept();
          },
        },
        {
          text: 'BSNL FTTH',
          handler: () => {
            this.accep();
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    (await actionSheet).present();
  }

  accept() {
    this.showAler();
  }

  async showAler() {
    const alert = await this.alertctrl.create({
      header: 'Wifi Connection',
      subHeader: 'Available Wifi',
      message: 'You are Connected Airtel Wifi ',
      buttons: ['OK'],
    });

    await alert.present();
  }

  accep() {
    this.showAl();
  }

  async showAl() {
    const alert = await this.alertctrl.create({
      header: 'Wifi Connection',
      subHeader: 'Available Wifi',
      message: 'You are Connected BSNL FTTH',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
