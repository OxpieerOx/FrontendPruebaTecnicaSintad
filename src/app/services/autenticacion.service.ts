import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { User } from './../model/user';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  user: User;

  constructor(private router: Router) {
    this.user = new User();
  }

  canActivate() {
    this.user = new User();
    this.user.token = sessionStorage.getItem('token')!;
    if (sessionStorage.getItem('token') != null) {
      console.log("token:", sessionStorage.getItem('token'));
      return true
    }
    else {
      console.log("no hay token");
      this.router.navigate(['/mlogin']);
      return false;
    }
  }
}
