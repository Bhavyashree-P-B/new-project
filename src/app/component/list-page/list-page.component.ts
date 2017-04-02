import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JustAddsServiceService } from '../../service/just-adds-service.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private JustAddsServiceService: JustAddsServiceService) { }

  typeName: any;
  typeList: any = [];

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.typeName = params['listName'];
this.typeList=[];
      this.JustAddsServiceService.getList(this.typeName).subscribe(response => {
        for (var i = 0; i < response.length; i++) {
          if (response[i].category == this.typeName)
            this.typeList.push(response[i]);
        }

      });


    });
  }
}