import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-popover-visibility",
  templateUrl: "./popover-visibility.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdPopoverVisibility {
  lastShown: Date;
  lastHidden: Date;

  recordShown() {
    this.lastShown = new Date();
  }

  recordHidden() {
    this.lastHidden = new Date();
  }
}
