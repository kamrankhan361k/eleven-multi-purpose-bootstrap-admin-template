import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-popover-customclass",
  templateUrl: "./popover-customclass.html",
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .my-custom-class {
        background: aliceblue;
        font-size: 125%;
      }
      .my-custom-class .arrow::after {
        border-top-color: aliceblue;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdPopoverCustomclass {}
