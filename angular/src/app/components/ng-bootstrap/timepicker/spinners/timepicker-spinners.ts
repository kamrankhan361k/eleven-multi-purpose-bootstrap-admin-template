import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-timepicker-spinners",
  templateUrl: "./timepicker-spinners.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTimepickerSpinners {
  time = { hour: 13, minute: 30 };
  spinners = true;

  toggleSpinners() {
    this.spinners = !this.spinners;
  }
}
