import { Component, OnInit } from '@angular/core';
import {JustAddsServiceService} from '../../service/just-adds-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  powers: any;

  cate: any;
  address: any;
  name: any;
  description: any;


  constructor(private JustAddsServiceService: JustAddsServiceService) { }

  ngOnInit() {
    this.powers = ['hotel', 'cinima', 'flower', 'doctor', 'pharma'];
  }

  onSubmit() {
    var data = {
      name: this.name,
      address: this.address,
      category: this.cate,
      description: this.description
    };


this.JustAddsServiceService.addData(data).subscribe(response => {
        // for (var i = 0; i < response.length; i++) {
          // if (response[i].category == this.typeName)
            // this.typeList.push(response[i]);
        // }
      });

  }
}
