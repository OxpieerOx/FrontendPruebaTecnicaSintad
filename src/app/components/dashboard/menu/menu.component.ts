import { Component, OnInit } from '@angular/core';
declare const accountActive: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  onClickAccount() {
    accountActive();
  }
  ngOnInit(): void {
  }

}
