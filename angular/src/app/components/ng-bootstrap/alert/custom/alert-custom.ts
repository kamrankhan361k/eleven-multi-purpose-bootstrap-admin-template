import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-alert-custom",
  templateUrl: "./alert-custom.html",
  styles: [
    `
      :host >>> .alert-custom {
        color: #99004d;
        background-color: #f169b4;
        border-color: #800040;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdAlertCustom {}
