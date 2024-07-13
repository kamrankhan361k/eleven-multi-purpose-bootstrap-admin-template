import { Component } from "@angular/core";
import { NgbTabChangeEvent } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-tabset-preventchange",
  templateUrl: "./tabset-preventchange.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTabsetPreventchange {
  public beforeChange($event: NgbTabChangeEvent) {
    if ($event.nextId === "tab-preventchange2") {
      $event.preventDefault();
    }
  }
}
