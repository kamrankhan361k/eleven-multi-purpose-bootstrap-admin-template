import { Component, OnInit } from "@angular/core";

import { Invoice } from "./invoice";
import { InvoiceService } from "./invoice.service";
import { first } from "rxjs/operators";
import { formatPrice } from "../../helpers";

@Component({
  selector: "app-invoice",
  templateUrl: "./invoice.component.html",
  styleUrls: ["./invoice.component.scss"]
})
export class InvoiceComponent implements OnInit {
  invoice;
  tax = 15;
  subTotal;

  ngOnInit(): void {
    this.getMedia();
  }

  constructor(private invoiceService: InvoiceService) {}

  getMedia(): void {
    this.invoiceService
      .getAll()
      .pipe(first())
      .subscribe(invoice => {
        this.invoice = invoice;
        this.subTotal = this.invoice
          ? this.invoice.items.reduce(
              (sum, item) => sum + item.quantity * item.price,
              0
            )
          : 0;
      });
  }

  getSubTotal(): string {
    return formatPrice(this.subTotal);
  }

  getTotal(): string {
    const calculatedTax = (this.tax * this.subTotal) / 100;
    return formatPrice(this.subTotal + calculatedTax);
  }

  getCalculatedTax(): string {
    return formatPrice((this.tax * this.subTotal) / 100);
  }

  itemPrice(price, quantity): string {
    return formatPrice(price * quantity);
  }
}
