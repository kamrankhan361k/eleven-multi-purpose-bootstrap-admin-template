import { Component } from "@angular/core";
import { NgbPopoverConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-popover-config",
  templateUrl: "./popover-config.html",
  providers: [NgbPopoverConfig] // add NgbPopoverConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdPopoverConfig {
  constructor(config: NgbPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = "right";
    config.triggers = "hover";
  }
}
