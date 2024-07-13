import { Component } from "@angular/core";
import { NgbAccordionConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-accordion-config",
  templateUrl: "./accordion-config.html",
  providers: [NgbAccordionConfig] // add the NgbAccordionConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdAccordionConfig {
  constructor(config: NgbAccordionConfig) {
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = "info";
  }
}
