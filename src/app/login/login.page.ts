import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireService } from '../fire.service';
import { IonicStorageService } from '../storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any;
  constructor(
    private fire: FireService,
    private router: Router,
    private storage: IonicStorageService
  ) {}

  ngOnInit() {}

  public email: any;
  public password: any;

  submit() {
    this.fire
      .loginWithEmail({ email: this.email, password: this.password })
      .then(
        (res: any) => {
          console.log(res); // get id of loggedin user
          if (res.user.uid) {
            this.fire.getDetails({ uid: res.user.uid }).subscribe(
              (res: any) => {
                alert('Login SuccessFull');
                this.userData = res;
                console.log(this.userData);
                this.storage.store('userData', this.userData).then((data) => {
                  this.router.navigate(['/home']);
                });
              },
              (err: any) => {
                console.log(err);
              }
            );
          }
        },
        (err: any) => {
          alert(err.message);
          console.log(err);
        }
      );
  }
}
