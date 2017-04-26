import { Component, OnInit, AfterViewInit } from '@angular/core';
import { JustAddsServiceService } from '../../service/just-adds-service.service';
import {Router} from '@angular/router'
declare var $:any;
 
@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {

  ngAfterViewInit() {
      $( document ).ready(function() {
       $('[data-toggle="tooltip"]').tooltip();
      });
    } 
    
  constructor(private JustAddsServiceService: JustAddsServiceService,
  private router: Router) { }
  typeList: any = [];
  ngOnInit() {

    this.JustAddsServiceService.getList().subscribe(response => {
      for (var i = 0; i < response.length; i++) {

        this.typeList.push(response[i]);
      }
    });
  }

  deleteProduct(id) {
    this.JustAddsServiceService.deleteProduct(id).subscribe(response => {
      for (var i = 0; i < this.typeList.length; i++) {
        if (id == this.typeList[i]._id) {
          this.typeList.splice(i, 1);
        }

      }
    }); 
  }

  openAddProduct() {
this.router.navigate(['adminadd']);
  }

}
