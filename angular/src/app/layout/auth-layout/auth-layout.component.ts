import { Component } from "@angular/core";

@Component({
  selector: "app-layout",
  template: `
    <div class="page">
      <div class="position-relative d-flex flex-row flex-fill page-wrapper">
        <div
          class="position-relative d-flex flex-column flex-fill page-content"
          style="min-width:0"
        >
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `
})
export class AuthLayoutComponent {}
