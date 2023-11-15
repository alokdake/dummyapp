import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';

@Component({
  selector: 'app-scenario4',
  templateUrl: './scenario4.page.html',
  styleUrls: ['./scenario4.page.scss'],
})
export class Scenario4Page implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;
  constructor(private formBuilder: FormBuilder) {}

  public form!: FormGroup;
  public email!: any;
  fname: any;
  lname: any;

  ngOnInit() {}

  message =
    'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name!: string;
  phone: any;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
    location.reload();
  }
}
