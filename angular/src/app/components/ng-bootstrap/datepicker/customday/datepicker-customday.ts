import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct
} from "@ng-bootstrap/ng-bootstrap";

import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-datepicker-customday",
  templateUrl: "./datepicker-customday.html",
  styles: [
    `
      .custom-day {
        text-align: center;
        padding: 0.185rem 0.25rem;
        border-radius: 0.25rem;
        display: inline-block;
        width: 2rem;
      }
      .custom-day:hover,
      .custom-day.focused {
        background-color: #e6e6e6;
      }
      .weekend {
        background-color: #f0ad4e;
        border-radius: 1rem;
        color: white;
      }
      .hidden {
        display: none;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerCustomday {
  model: NgbDateStruct;

  constructor(private calendar: NgbCalendar) {}

  isDisabled = (date: NgbDate, current: { month: number }) =>
    // tslint:disable-next-line:semicolon
    date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;
}
