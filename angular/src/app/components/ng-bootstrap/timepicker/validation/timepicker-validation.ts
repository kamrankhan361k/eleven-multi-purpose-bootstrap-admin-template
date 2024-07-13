import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-timepicker-validation",
  templateUrl: "./timepicker-validation.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTimepickerValidation {
  ctrl = new FormControl("", (control: FormControl) => {
    const value = control.value;

    if (!value) {
      return null;
    }

    if (value.hour < 12) {
      return { tooEarly: true };
    }
    if (value.hour > 13) {
      return { tooLate: true };
    }

    return null;
  });
}
