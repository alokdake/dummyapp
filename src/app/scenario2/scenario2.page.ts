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
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-scenario2',
  templateUrl: './scenario2.page.html',
  styleUrls: ['./scenario2.page.scss'],
})
export class Scenario2Page implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private storage: IonicStorageService,
    private router: Router
  ) {}

  public ionicForm!: FormGroup;
  public email!: any;
  public name!: any;
  public no!: any;

  result: any;

  male: any;
  female: any;
  gender!: boolean;
  jobStatus!: boolean;

  fname: any;
  lname: any;
  location: any;
  projectName: any;
  inspectedBy: any;

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

      gender: ['', [Validators.required]],
      location: ['', [Validators.required, Validators.minLength(2)]],
      projectName: ['', [Validators.required, Validators.minLength(2)]],
      inspectedBy: ['', [Validators.required, Validators.minLength(2)]],
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
  get Location(): FormControl {
    return this.ionicForm.get('location') as FormControl;
  }
  get ProjectName(): FormControl {
    return this.ionicForm.get('projectName') as FormControl;
  }
  get InspectedBy(): FormControl {
    return this.ionicForm.get('inspectedBy') as FormControl;
  }
  get Gender(): FormControl {
    return this.ionicForm.get('gender') as FormControl;
  }

  submit() {
    let registerModel = {
      email: this.email,
      fname: this.fname,
      lname: this.lname,
      no: this.no,
      location: this.location,
      projectName: this.projectName,
      inspectedBy: this.inspectedBy,
      gender: this.gender,
    };
    console.log(registerModel);

    this.result = registerModel;
    console.log(this.result); //our all data in result

    this.storage.store('userData', this.result).then((data: any) => {
      console.log(data);
      this.router.navigate(['/scenario2card']);
    });
  }

  doRefresh(event: any) {
    setTimeout(() => {
      event.target.complete();
    }, 4000);
    location.reload();
  }
}
