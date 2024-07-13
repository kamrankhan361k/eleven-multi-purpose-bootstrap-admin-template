import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-rating-decimal",
  templateUrl: "./rating-decimal.html",
  styles: [
    `
      .star {
        position: relative;
        display: inline-block;
        font-size: 3rem;
        color: #d3d3d3;
      }
      .full {
        color: red;
      }
      .half {
        position: absolute;
        display: inline-block;
        overflow: hidden;
        color: red;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdRatingDecimal {
  currentRate = 3.14;
}
