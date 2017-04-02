import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] //'./component/dashboard/dashboard.component.css'
})
export class AppComponent implements OnInit {
constructor(private route: ActivatedRoute,
private router: Router) { 
 
}
isMobile:any;

ngOnInit(){

    this.isMobile= /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}public openNav() {
    $('.sidenav.mobile').show('slow');
}
public signin(){
    $('#signinModal').modal({show:true});
}

}

  
