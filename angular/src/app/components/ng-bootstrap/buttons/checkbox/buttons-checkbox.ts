import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-buttons-checkbox",
  templateUrl: "./buttons-checkbox.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdButtonsCheckbox {
  model = {
    left: true,
    middle: false,
    right: false
  };
}
