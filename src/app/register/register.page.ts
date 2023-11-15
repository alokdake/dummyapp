import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { FireService } from '../fire.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  constructor(private fire: FireService, private router: Router) {}

  ngOnInit() {}

  public name: any;
  public email: any;
  public password: any;
  public cnfpass: any;

  submit() {
    this.fire
      .userRegistration({
        email: this.email, //key: this.value
        password: this.password,
      })
      .then(
        (result: any) => {
          if (result.user.uid) {
            let data = {
              name: this.name,
              email: this.email,
              password: this.password,
              confirmPassword: this.cnfpass,
            };
            console.log(data);

            this.fire.saveUserDetails(data).then(
              (res: any) => {
                console.log(res);
                alert('Account Created SuccessFully');
                this.router.navigate(['/login']);
              },
              (err: any) => {
                alert(err);
              }
            );
          }
        },
        (err: { message: any }) => {
          alert(err.message);
          console.log(err);
        }
      );
  }
}
