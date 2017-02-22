import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

this.route.params.subscribe(params => {
       console.log("route data="+params['listName'])
    });

  }

}
