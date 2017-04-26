import { Component, OnInit } from '@angular/core';
import { JustAddsServiceService } from '../../service/just-adds-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent implements OnInit {
  powers: any;
  cate: any;
  address: any;
  name: any;
  description: any;

  constructor(private JustAddsServiceService: JustAddsServiceService,
    private router: Router) { }

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
      this.router.navigate(['admin']);
    });
  }

  openlistProducts() {
    this.router.navigate(['admin']);
  }
}
