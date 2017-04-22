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

  typeDetails: any;
  name:any;
  description;
  address;
  category
  ngOnInit() {

    this.route.params.subscribe(params => {
      var myId = params['Id'];
    //   this.JustAddsServiceService.getDetails(myId)
    //     .subscribe(response => {
    //       this.Id.push(response[0]);
    // });
    this.JustAddsServiceService.getDetails(myId).subscribe(response => {
        // for (var i = 0; i < response.length; i++) {
          // if (response[i].category == this.typeName)

          console.log(response[0])
            this.typeDetails=response[0];
            this.name=response[0].name;
            this.address=response[0].address;
            this.category=response[0].category;
            this.description=response[0].description;
        // }
      });
    })
  }

}
