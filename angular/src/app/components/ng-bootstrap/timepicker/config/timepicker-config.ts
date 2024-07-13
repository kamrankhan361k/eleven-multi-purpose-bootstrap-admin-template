import { Component } from "@angular/core";
import { NgbTimeStruct } from "@ng-bootstrap/ng-bootstrap";
import { NgbTimepickerConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-timepicker-config",
  templateUrl: "./timepicker-config.html",
  providers: [NgbTimepickerConfig] // add NgbTimepickerConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTimepickerConfig {
  time: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };

  constructor(config: NgbTimepickerConfig) {
    // customize default values of ratings used by this component tree
    config.seconds = true;
    config.spinners = false;
  }
}
