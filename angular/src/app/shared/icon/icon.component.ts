import { Component, Input, NgZone, OnChanges, OnInit } from "@angular/core";

import { AnimationItem } from "lottie-web";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "app-animated-icon",
  template: `
    <ng-lottie
      *ngIf="path"
      [width]="size"
      [height]="size"
      [ngStyle]="{ width: size, height: size }"
      [options]="options"
      (animationCreated)="animationCreated($event)"
    ></ng-lottie>
  `
})
export class IconComponent implements OnInit, OnChanges {
  private animationItem: AnimationItem;
  @Input() path: string;
  @Input() size: string;
  @Input() loop: boolean;
  @Input() autoPlay = false;

  options: AnimationOptions = {};

  constructor(private ngZone: NgZone) {}

  animationCreated(animationItem: AnimationItem): void {
    this.animationItem = animationItem;
  }

  stop(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.stop());
  }

  play(): void {
    this.ngZone.runOutsideAngular(() => this.animationItem.play());
  }

  ngOnChanges() {
    if (this.animationItem) {
      if (this.autoPlay) {
        this.play();
      } else {
        this.stop();
      }
    }
  }

  ngOnInit(): void {
    this.options = {
      renderer: "svg",
      loop: true,
      autoplay: this.autoPlay ? true : false,
      path: this.path
    };
  }
}
