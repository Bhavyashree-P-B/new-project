import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  menuData = [
    {
      "menuName": "Hotels",
      "routeLink": "/list/hotel",
      "iconClass": "fa fa-h-square",
      "imageUrl": ""
    },
    {
      "menuName": "Cinima",
      "routeLink": "/list/cinima",
      "iconClass": "fa fa-film",
      "imageUrl": ""
    },
    {
      "menuName": "flower shops",
      "routeLink": "/list/flower",
      "iconClass": "fa fa-gift",
      "imageUrl": ""
    },
    {
      "menuName": "doctors",
      "routeLink": "/list/doctor",
      "iconClass": "fa fa-user-md",
      "imageUrl": ""
    },
    {
      "menuName": "pharma",
      "routeLink": "/list/pharma",
      "iconClass": "fa fa-plus-square",
      "imageUrl": ""
    }];
  ngOnInit() {
  }

}
