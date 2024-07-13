import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-progressbar-height",
  templateUrl: "./progressbar-height.html",
  styles: [
    `
      ngb-progressbar {
        margin-top: 5rem;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdProgressbarHeight {
  height = "20px";
}
