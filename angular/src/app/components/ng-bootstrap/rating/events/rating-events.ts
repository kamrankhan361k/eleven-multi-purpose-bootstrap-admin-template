import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-rating-events",
  templateUrl: "./rating-events.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdRatingEvents {
  selected = 0;
  hovered = 0;
  readonly = false;
}
