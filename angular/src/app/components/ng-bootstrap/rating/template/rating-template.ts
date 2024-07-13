import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-rating-template",
  templateUrl: "./rating-template.html",
  styles: [
    `
      .star {
        font-size: 1.5rem;
        color: #b0c4de;
      }
      .filled {
        color: #1e90ff;
      }
      .bad {
        color: #deb0b0;
      }
      .filled.bad {
        color: #ff1e1e;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdRatingTemplate {
  currentRate = 6;
}
