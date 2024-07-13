import { Component, HostBinding, Input, NgZone, OnInit } from "@angular/core";

@Component({
  selector: "app-stat",
  template: `
    <div class="card card-body" [ngClass]="fill ? 'bg-' + type : ''">
      <div
        class="row"
        [ngClass]="
          vertical
            ? 'flex-column justify-content-center text-center align-items-center'
            : 'justify-content-start align-items-center'
        "
      >
        <div
          class="col-auto"
          [ngClass]="vertical ? 'p-3' : ''"
          *ngIf="!reverse"
        >
          <button
            class="btn"
            [ngClass]="type ? 'btn-' + type : ''"
            style="padding: 0.1rem; border-radius: 50%; min-width: 32px; min-height: 32px;border: 0;"
            [ngStyle]="{
              width: iconSize + 'px',
              height: iconSize + 'px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }"
            type="button"
          >
            <span class="animated-icon" *ngIf="icon && !src">
              <app-animated-icon
                [ngStyle]="{
                  width: iconSize + 'px',
                  height: iconSize + 'px'
                }"
                [path]="icon"
                [autoPlay]="iconAutoPlay"
                size="{{ iconSize }}px"
              ></app-animated-icon>
            </span>
            <app-avatar
              [src]="src"
              size="30"
              name="avatar"
              *ngIf="!icon && src"
            ></app-avatar>
          </button>
        </div>
        <div class="col-auto">
          <h5
            class="stat-widget-title mb-0 fw-400"
            [ngClass]="fill ? 'text-white' : ''"
          >
            {{ value }}
          </h5>
          <h6 class="stat-widget-subtitle" [ngClass]="fill ? 'text-white' : ''">
            {{ title }}
          </h6>
        </div>
        <span class="mr-auto"></span>
        <div class="col-auto" [ngClass]="vertical ? 'p-3' : ''" *ngIf="reverse">
          <button
            class="btn"
            [ngClass]="type ? 'btn-' + type : ''"
            style="padding: 0.1rem; border-radius: 50%; min-width: 32px; min-height: 32px;"
            type="button"
          >
            <span class="animated-icon" *ngIf="icon && !src">
              <app-animated-icon
                [ngStyle]="{
                  width: iconSize + 'px',
                  height: iconSize + 'px'
                }"
                [path]="icon"
                [autoPlay]="iconAutoPlay"
                size="{{ iconSize }}px"
              ></app-animated-icon>
            </span>
            <app-avatar
              [src]="src"
              size="30"
              name="avatar"
              *ngIf="!icon && src"
            ></app-avatar>
          </button>
        </div>
      </div>
    </div>
  `
})
export class StatComponent {
  @Input() reverse: boolean;
  @Input() fill: boolean;
  @Input() title: string;
  @Input() value: string;
  @Input() icon: string;
  @Input() iconSize: number;
  @Input() type: string;
  @Input() vertical: boolean;
  @Input() src: string;
  @Input() iconAutoPlay: boolean;

  constructor() {}
}
