import { Component } from "@angular/core";
import { NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-pagination-config",
  templateUrl: "./pagination-config.html",
  providers: [NgbPaginationConfig] // add NgbPaginationConfig to the component providers
})
// tslint:disable-next-line:component-class-suffix
export class NgbdPaginationConfig {
  page = 4;

  constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = "sm";
    config.boundaryLinks = true;
  }
}
