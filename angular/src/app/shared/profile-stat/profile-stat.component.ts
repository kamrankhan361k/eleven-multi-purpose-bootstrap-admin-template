import {
  Component,
  HostBinding,
  HostListener,
  Input,
  NgZone,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-profile-stat",
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
        <div class="content text-center p-4">
          <div class="mb-4 justify-content-around align-items.center row">
            <div class="profile-card-picture">
              <button class="message btn btn-secondary" type="button">
                <span class="animated-icon">
                  <app-animated-icon
                    style="width:16px;height:16px"
                    path="assets/animated-icons/speech/speech.json"
                    size="16px"
                  ></app-animated-icon>
                </span>
              </button>
              <app-avatar [src]="avatar" size="100" name="avatar"></app-avatar>
            </div>
          </div>
          <h6 class="mb-0 text-white">
            {{ name }} -
            <small class="text-white">{{ location }}</small>
          </h6>
        </div>
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
export class ProfileStatComponent {
  showNavigationArrows = false;
  @Input() name: string;
  @Input() avatar: string;
  @Input() images = [];
  @Input() location: string;
  @Input() data = [];
  @Input() coverHeight: number;

  constructor(private ngZone: NgZone) {}
}
