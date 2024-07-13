import { Component } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-dropdown-config",
  templateUrl: "./dropdown-config.html",
  providers: [NgbDropdownConfig] // add NgbDropdownConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDropdownConfig {
  constructor(config: NgbDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = "top-left";
    config.autoClose = false;
  }
}
