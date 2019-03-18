import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
    private router: any;
  constructor(public auth: AuthService, public router: Router) {  }

  ngOnInit() {
    this.loginForm = new FormGroup({
     userName: new FormControl(null, [Validators.email]),
     passWord: new FormControl(null)
    });
  }

  onSubmitFrom() {
      this.auth.doLogin();
      console.log(localStorage.getItem('loggedIn'));
      this.router.navigate(['/']);
   //    console.log(this.auth.test());
   //    this.auth.doLogOut();
   //    console.log(this.auth.test());
   //    this.router.navigate(['/users']);
   //  // this.auth.isAuthenticate();
   // console.log(this.loginForm);
  }

    onLogout() {
      this.auth.doLogOut();
      this.router.navigate(['/']);
    }
}
