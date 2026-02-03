import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyService } from '../services/properties';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.page.html',
  styleUrls: ['./property-details.page.scss'],
  standalone:false
})
export class PropertyDetailsPage implements OnInit {
 property: any;
  response: any;
  data: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private service: PropertyService
  ) {}

  ngOnInit() {
     const id = Number(this.route.snapshot.queryParamMap.get('id'));

    this.service.generatelist({
    auction_id: 32,
    }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.response = res;
        this.data = this.response.result.records;
        console.log(this.data);
        console.log(this.data[0]);

        console.log(this.response.result);

      },
      error: (err: any) => {
        console.error(err);
      }
    });
    this.service.generateListDetail({ auction_id: id }).subscribe(res => {
      this.property = res?.result;
      console.log(this.property);
    })
  }
  
}


