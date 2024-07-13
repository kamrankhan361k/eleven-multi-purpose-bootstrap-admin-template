import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-tooltip-customclass",
  templateUrl: "./tooltip-customclass.html",
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .my-custom-class .tooltip-inner {
        background-color: darkgreen;
        font-size: 125%;
      }
      .my-custom-class .arrow::before {
        border-top-color: darkgreen;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTooltipCustomclass {}
