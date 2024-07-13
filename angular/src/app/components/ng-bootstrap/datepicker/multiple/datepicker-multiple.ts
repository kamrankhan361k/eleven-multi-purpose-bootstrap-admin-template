import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-datepicker-multiple",
  templateUrl: "./datepicker-multiple.html",
  styles: [
    `
      select.custom-select {
        margin: 0.5rem 0.5rem 0 0;
        width: auto;
      }
    `
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerMultiple {
  displayMonths = 2;
  navigation = "select";
  showWeekNumbers = false;
  outsideDays = "visible";
}
