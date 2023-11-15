import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {
  public progress = 0;

  constructor(private loadingCtrl: LoadingController, private router: Router) {
    setInterval(() => {
      this.progress += 0.05;
      if (this.progress > 1) {
        // alert('Your Devive is sucessfully updated !');
        this.progress = 1;
        // this.progress = 0.8;
        // setTimeout(() => {
        //   this.progress = 0;
        // }, 1000);
      }
    }, 1000);
  }

  ngOnInit() {}

  async showLoader() {
    const loader = await this.loadingCtrl.create({
      message: 'Please Wait !!!',
      duration: 200,
    });
    loader.present();
    this.router.navigate(['/home']);
  }

  pinFormatter(value: number) {
    return `${value}%`;
  }
}
