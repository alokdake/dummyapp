import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scenario3',
  templateUrl: './scenario3.page.html',
  styleUrls: ['./scenario3.page.scss'],
})
export class Scenario3Page implements OnInit {
  status!: any;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  public ionicForm!: FormGroup;
  public email!: any;
  public name!: any;
  public no!: any;

  result: any;
  toggle: boolean = false;
  fname: any;
  lname: any;

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      fname: ['', [Validators.required, Validators.minLength(2)]],
      lname: ['', [Validators.required, Validators.minLength(2)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      no: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      toggle: ['', [Validators.required]],
    });
  }

  get FirstName(): FormControl {
    return this.ionicForm.get('fname') as FormControl;
  }
  get LastName(): FormControl {
    return this.ionicForm.get('lname') as FormControl;
  }
  get Email(): FormControl {
    return this.ionicForm.get('email') as FormControl;
  }
  get phone(): FormControl {
    return this.ionicForm.get('no') as FormControl;
  }
  get Toggle(): FormControl {
    return this.ionicForm.get('toggle') as FormControl;
  }

  submit() {
    let registerModel = {
      email: this.email,
      fname: this.fname,
      lname: this.lname,
      no: this.no,
      toggle: this.status,
    };
    console.log(registerModel);

    this.result = registerModel;
    console.log(this.result); //our all data in result
  }

  changeToggle() {
    if (this.toggle == true) {
      this.status = 'Online';
    } else {
      this.status = 'Offline';
    }
    console.log(this.toggle + 'is checked');
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
    location.reload();
  }

  go() {
    if (this.toggle == true) {
      this.router.navigate(['/home']);
    } else {
      alert('Your Current status is Offline');
    }
  }
}
