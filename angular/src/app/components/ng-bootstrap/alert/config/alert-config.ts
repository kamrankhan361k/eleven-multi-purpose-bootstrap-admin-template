import { Component, Input } from "@angular/core";

import { NgbAlertConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-alert-config",
  templateUrl: "./alert-config.html",
  // add NgbAlertConfig  to the component providers
  providers: [NgbAlertConfig]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdAlertConfig {
  @Input() public alerts: Array<string> = [];

  constructor(alertConfig: NgbAlertConfig) {
    // customize default values of alerts used by this component tree
    alertConfig.type = "success";
    alertConfig.dismissible = false;
  }
}
