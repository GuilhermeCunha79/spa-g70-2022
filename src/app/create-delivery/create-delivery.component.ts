﻿import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DeliveryService} from "../services/DeliveryService";
import {Delivery} from "../delivery";

@Component({
  selector: 'app-create-warehouse',
  templateUrl: './create-delivery.component.html',
  styleUrls: ['./create-delivery.component.css']
})
export class DeliveryComponent implements OnInit {
  delivery: Delivery;
  "deliveryIdentifier": string;
  "day": number;
  "month": string;
  "year": number;
  "mass": number;
  "placingTime": number;
  "storeId": string;
  "withdrawalTime": number;




  constructor(private deliveryService: DeliveryService,
              private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit(): void {
    this.listTable();
  }


  public createDelivery(): void {
    this.deliveryService.createDelivery(this.deliveryIdentifier, this.day, this.month, this.year, this.mass, this.placingTime, this.storeId, this.withdrawalTime).subscribe(data => {console.log(data);
      this.delivery = data
    });
  }

  public listTable(): void {
    this.deliveryService.listTable();

  }



}