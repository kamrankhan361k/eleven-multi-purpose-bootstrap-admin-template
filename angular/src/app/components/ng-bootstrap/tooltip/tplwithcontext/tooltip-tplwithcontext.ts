import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-tooltip-tplwithcontext",
  templateUrl: "./tooltip-tplwithcontext.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdTooltipTplwithcontext {
  name = "World";

  toggleWithGreeting(tooltip, greeting: string) {
    if (tooltip.isOpen()) {
      tooltip.close();
    } else {
      tooltip.open({ greeting });
    }
  }
}
