import { Component } from "@angular/core";
import { NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-timepicker-seconds",
  templateUrl: "./timepicker-seconds.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTimepickerSeconds {
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 30 };
  seconds = true;

  toggleSeconds() {
    this.seconds = !this.seconds;
  }
}
