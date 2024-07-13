import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-popover-tplwithcontext",
  templateUrl: "./popover-tplwithcontext.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdPopoverTplwithcontext {
  name = "World";

  toggleWithGreeting(popover, greeting: string, language: string) {
    if (popover.isOpen()) {
      popover.close();
    } else {
      popover.open({ greeting, language });
    }
  }
}
