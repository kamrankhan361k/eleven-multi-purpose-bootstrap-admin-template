import { Component, OnInit } from "@angular/core";

import { Pricing } from "./pricing";
import { PricingService } from "./pricing.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-pricing",
  templateUrl: "./pricing.component.html",
  styleUrls: ["./pricing.component.scss"]
})
export class PricingComponent implements OnInit {
  prices: Pricing[] = [];
  ngOnInit(): void {
    this.getPrices();
  }

  constructor(private pricingService: PricingService) {}

  getPrices(): void {
    this.pricingService
      .getAll()
      .pipe(first())
      .subscribe(prices => {
        this.prices = prices;
      });
  }
}
