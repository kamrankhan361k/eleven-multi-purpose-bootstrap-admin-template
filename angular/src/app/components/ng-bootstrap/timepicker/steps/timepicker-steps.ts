import { Component } from "@angular/core";
import { NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-timepicker-steps",
  templateUrl: "./timepicker-steps.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTimepickerSteps {
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  hourStep = 1;
  minuteStep = 15;
  secondStep = 30;
}
