import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  isMobile:any;
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

    this.isMobile= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

/* Close/hide the sidenav */
public closeNav() {
    $('.sidenav.mobile').hide('slow');
}


/* Open the sidenav */
public openNav() {
    $('.sidenav.mobile').show('slow');
}
}

