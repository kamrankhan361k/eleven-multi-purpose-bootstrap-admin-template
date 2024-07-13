import {
  Component,
  HostBinding,
  HostListener,
  Input,
  NgZone,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-image-stat",
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
      </div>
      <div class="card-body">
        <div class="row">
          <div class="text-center col" *ngFor="let item of data">
            <h5 class="mb-0">{{ item.value }}</h5>
            <small>{{ item.title }}</small>
          </div>
        </div>
      </div>
    </div>
  `
})
export class ImageStatComponent {
  showNavigationArrows = false;
  @Input() images = [];
  @Input() data = [];
  @Input() coverHeight: number;

  constructor(private ngZone: NgZone) {}
}
