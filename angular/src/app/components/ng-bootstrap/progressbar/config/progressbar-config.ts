import { Component } from "@angular/core";
import { NgbProgressbarConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-progressbar-config",
  templateUrl: "./progressbar-config.html",
  providers: [NgbProgressbarConfig] // add the NgbProgressbarConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdProgressbarConfig {
  constructor(config: NgbProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = "success";
    config.height = "20px";
  }
}
