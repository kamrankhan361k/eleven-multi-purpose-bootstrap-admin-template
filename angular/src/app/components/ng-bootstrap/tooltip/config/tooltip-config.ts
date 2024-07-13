import { Component } from "@angular/core";
import { NgbTooltipConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-tooltip-config",
  templateUrl: "./tooltip-config.html",
  providers: [NgbTooltipConfig] // add NgbTooltipConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTooltipConfig {
  constructor(config: NgbTooltipConfig) {
    // customize default values of tooltips used by this component tree
    config.placement = "right";
    config.triggers = "click";
  }
}
