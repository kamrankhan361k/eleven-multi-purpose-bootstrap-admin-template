import {
  Component,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output
} from "@angular/core";

@Component({
  selector: "app-anchor-item",
  template: `
    <a class="nav-link d-flex align-items-center w-100" (click)="expand.emit()">
      <span class="animated-icon" *ngIf="icon">
        <app-animated-icon
          [path]="icon"
          size="18px"
          [autoPlay]="autoPlay"
        ></app-animated-icon>
      </span>
      <span class="mr-auto menu-name">{{ name }}</span>
      <span class="badge badge-{{ badge.type }}" *ngIf="badge">{{
        badge.value
      }}</span>
      <span
        class="caret"
        *ngIf="hasItems"
        [ngClass]="hasItems && expanded ? 'caret-active' : ''"
      >
        <span class="animated-icon">
          <app-animated-icon
            path="assets/animated-icons/expand/expand.json"
            size="12px"
          ></app-animated-icon>
        </span>
      </span>
    </a>
  `
})
export class AnchorItemComponent {
  autoPlay: boolean;
  @HostBinding("class") classAttribute = "d-flex align-items-center";

  @Output()
  expand = new EventEmitter<void>();

  @Input() icon;
  @Input() name;
  @Input() badge;
  @Input() hasItems;
  @Input() expanded;

  @HostListener("mouseenter") onMouseEnter() {
    this.autoPlay = true;
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.autoPlay = false;
  }
}
