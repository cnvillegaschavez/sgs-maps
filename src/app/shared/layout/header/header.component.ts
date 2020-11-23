import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isCollapsed = false;
  title = 'Pedidos';
  userInfo = { userName: '', fullName: ''};
  menuList = [
    { _url: '/admin/orders', name: 'Pedidos', iconClass: 'shopping_cart' }
  ];

  constructor(private route: Router) { }

  ngOnInit(): void {
   this.userInfo = { userName: '', fullName: ''};
  }

  onLogout(): void {
    sessionStorage.removeItem('userTokenSiscal');
    this.route.navigate(['/login']);
  }

  onSelectMenu(itemMenu: any): void {
    this.title = itemMenu.name;
    this.route.navigate([itemMenu._url]);
  }
}
