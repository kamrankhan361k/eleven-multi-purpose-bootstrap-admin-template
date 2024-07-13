import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-pagination-disabled",
  templateUrl: "./pagination-disabled.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdPaginationDisabled {
  page = 3;
  isDisabled = true;

  toggleDisabled() {
    this.isDisabled = !this.isDisabled;
  }
}
