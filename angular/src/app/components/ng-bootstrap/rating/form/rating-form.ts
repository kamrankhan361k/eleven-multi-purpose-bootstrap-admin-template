import { FormControl, Validators } from "@angular/forms";

import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-rating-form",
  templateUrl: "./rating-form.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdRatingForm {
  ctrl = new FormControl(null, Validators.required);

  toggle() {
    if (this.ctrl.disabled) {
      this.ctrl.enable();
    } else {
      this.ctrl.disable();
    }
  }
}
