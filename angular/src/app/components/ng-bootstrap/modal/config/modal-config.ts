import { NgbModal, NgbModalConfig } from "@ng-bootstrap/ng-bootstrap";

import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-modal-config",
  templateUrl: "./modal-config.html",
  // add NgbModalConfig and NgbModal to the component providers
  providers: [NgbModalConfig, NgbModal]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalConfig {
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = "static";
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
}
