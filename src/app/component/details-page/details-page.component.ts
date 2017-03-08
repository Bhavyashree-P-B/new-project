import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JustAddsServiceService } from '../../service/just-adds-service.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css']
})
export class DetailsPageComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private JustAddsServiceService: JustAddsServiceService) { }

Id:any;
  ngOnInit() {

      this.route.params.subscribe(params => {
      this.Id = params['Id'];
      this.JustAddsServiceService.getDetails(this.Id)
        .then(Id => this.Id = Id);
    });

  }

}
