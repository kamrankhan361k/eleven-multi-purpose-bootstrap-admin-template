import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-datepicker-disabled",
  templateUrl: "./datepicker-disabled.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerDisabled {
  model: NgbDateStruct;
  disabled = true;

  constructor(calendar: NgbCalendar) {
    this.model = calendar.getToday();
  }
}
