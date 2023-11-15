import { Component, OnInit } from '@angular/core';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-camerausingcapacitor',
  templateUrl: './camerausingcapacitor.page.html',
  styleUrls: ['./camerausingcapacitor.page.scss'],
})
export class CamerausingcapacitorPage implements OnInit {
  constructor(
    private webview: WebView,
    private camera: Camera,
    private alertctrl: AlertController
  ) {}

  cameraOptions: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };

  galleryOptions: CameraOptions = {
    quality: 100,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation: true,
  };

  finalPicture: any;

  ngOnInit() {}

  async choosePhoto() {
    const loader = await this.alertctrl.create({
      header: 'Choose From',
      buttons: [
        {
          text: 'Open Camera',
          handler: () => {
            this.camera.getPicture(this.cameraOptions).then((result) => {
              let selectedPhoto = this.webview.convertFileSrc(result);
              this.finalPicture = selectedPhoto;
              console.log(this.finalPicture);
            });
          },
        },
        {
          text: 'Open Gallery',
          handler: () => {
            this.camera.getPicture(this.galleryOptions).then((result) => {
              let selectedPhoto = this.webview.convertFileSrc(result);
              this.finalPicture = selectedPhoto;
              console.log(this.finalPicture);
            });
          },
        },
      ],
    });
    loader.present();
  }
}
