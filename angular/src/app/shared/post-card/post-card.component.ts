import {
  Component,
  HostBinding,
  HostListener,
  Input,
  NgZone,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-post-card",
  template: `
    <div class="card">
      <div
        class="cover"
        *ngIf="images"
        [ngStyle]="{
          height: coverHeight + 'px'
        }"
      >
        <ngb-carousel
          class="rounded-top overflow-hidden"
          [showNavigationArrows]="showNavigationArrows"
        >
          <ng-template ngbSlide *ngFor="let image of images">
            <div
              class="image"
              [ngStyle]="{
                'background-image': 'url(' + image + ')',
                height: coverHeight + 'px'
              }"
            ></div>
          </ng-template>
        </ngb-carousel>
        <div class="title p-4">
          <h6 class="mb-0 text-white">{{ title }}</h6>
          <small class="mb-0 text-white-50">{{ subtitle }}</small>
        </div>
      </div>
      <div class="card-body">
        <div class="post-content">{{ text }}</div>
      </div>
    </div>
  `
})
export class PostCardComponent {
  showNavigationArrows = false;
  @Input() title: string;
  @Input() subtitle: string;
  @Input() text: string;
  @Input() images = [];
  @Input() coverHeight: number;

  constructor(private ngZone: NgZone) {}
}
