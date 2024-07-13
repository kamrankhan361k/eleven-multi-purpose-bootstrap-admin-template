import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-timepicker-meridian",
  templateUrl: "./timepicker-meridian.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTimepickerMeridian {
  time = { hour: 13, minute: 30 };
  meridian = true;

  toggleMeridian() {
    this.meridian = !this.meridian;
  }
}
