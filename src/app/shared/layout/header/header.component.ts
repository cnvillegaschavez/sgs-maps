import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonConstants } from '../../common/constants-common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;
  title = 'Maps';
  userInfo = { userName: '', fullName: ''};
  menuList = [
    { _url: '/admin/orders', name: 'Maps', iconClass: 'maps' }
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
    const userValue = sessionStorage.getItem(CommonConstants.userInfo);
    if (userValue) {
      const userJson = JSON.parse(userValue);
      this.userInfo = { userName: userJson.userName, fullName: userJson.userName};
    }
  }

  onLogout(): void {
    this.route.navigate(['/login']);
  }

  onSelectMenu(itemMenu: any): void {
    this.title = itemMenu.name;
    this.route.navigate([itemMenu._url]);
  }
}
