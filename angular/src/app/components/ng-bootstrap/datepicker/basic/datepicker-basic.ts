import { NgbCalendar, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-datepicker-basic",
  templateUrl: "./datepicker-basic.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerBasic {
  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
