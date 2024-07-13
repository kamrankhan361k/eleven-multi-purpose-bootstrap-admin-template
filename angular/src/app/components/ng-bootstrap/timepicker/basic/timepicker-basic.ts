import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-timepicker-basic",
  templateUrl: "./timepicker-basic.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTimepickerBasic {
  time = { hour: 13, minute: 30 };
}
