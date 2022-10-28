import { Component, OnInit } from '@angular/core';

import { User } from './../../model/user'
import {  SecurityService } from './../../services/security.service'
import { Router } from '@angular/router'      

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  user: User = new User();
  errorMessage: string;

  constructor(private router: Router, private service: SecurityService) {
    console.log("constructor SecurityComponent");
    this.errorMessage = "";
  }

  ngOnInit(): void {
  }

  public login() {
    console.log(this.user);
    this.service.getToken(this.user).subscribe(
      response => {
        sessionStorage.setItem("token", response.token);
        this.redirectLogin();
      },
      error => {
        this.errorMessage = <any>error;
        console.log("error login", this.errorMessage);
        this.router.navigate(['/login']);
      }
    );
  }

  public redirectLogin() {
    this.router.navigate(['/dashboard']);
  }

}
