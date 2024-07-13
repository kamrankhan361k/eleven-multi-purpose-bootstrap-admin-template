import { Component } from "@angular/core";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-carousel-basic",
  templateUrl: "./carousel-basic.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdCarouselBasic {
  images = [944, 1011, 984].map(n => `https://picsum.photos/id/${n}/900/500`);
}
