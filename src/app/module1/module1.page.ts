import { Component, OnInit } from '@angular/core';
import { WebView } from '@awesome-cordova-plugins/ionic-webview/ngx';
import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-module1',
  templateUrl: './module1.page.html',
  styleUrls: ['./module1.page.scss'],
})
export class Module1Page implements OnInit {
  constructor(
    private webview: WebView,
    private camera: Camera,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertctrl: AlertController,
    private storage: IonicStorageService
  ) {}

  public m1Form!: FormGroup;
  public email!: any;
  public name!: any;
  public no!: any;
  public age: any;

  bio: any;
  username!: any;
  result: any;
  finalPicture: any;

  ngOnInit() {
    this.m1Form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      username: ['', [Validators.required, Validators.minLength(2)]],
      bio: ['', [Validators.required, Validators.minLength(2)]],

      no: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      age: ['', [Validators.required, Validators.maxLength(2)]],
    });
  }

  get Name(): FormControl {
    return this.m1Form.get('name') as FormControl;
  }
  get Username(): FormControl {
    return this.m1Form.get('username') as FormControl;
  }
  get Bio(): FormControl {
    return this.m1Form.get('bio') as FormControl;
  }
  get phone(): FormControl {
    return this.m1Form.get('no') as FormControl;
  }
  get Age(): FormControl {
    return this.m1Form.get('age') as FormControl;
  }

  submit() {
    let registerModel = {
      bio: this.bio,
      name: this.name,
      username: this.username,
      no: this.no,
      age: this.age,
      finalPicture: this.finalPicture,
    };
    console.log(registerModel);

    this.result = registerModel;
    console.log(this.result); //our all data in result

    this.storage.store('profileData', this.result).then((data: any) => {
      console.log(data);
      this.router.navigate(['/module1card']);
    });
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
    location.reload();
  }

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

  delete() {
    location.reload();
  }
}
