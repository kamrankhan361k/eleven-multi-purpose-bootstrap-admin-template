import { BlankComponent } from "./blank/blank.component";
import { CommonModule } from "@angular/common";
import { ElevenSharedModule } from "../shared";
import { InvoiceComponent } from "./invoice/invoice.component";
import { NgModule } from "@angular/core";
import { PagesRoutes } from "./pages.routing";
import { PricingComponent } from "./pricing/pricing.component";
import { RouterModule } from "@angular/router";
import { TimelineComponent } from "./timeline/timeline.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PagesRoutes),
    ElevenSharedModule
  ],
  declarations: [
    InvoiceComponent,
    BlankComponent,
    PricingComponent,
    TimelineComponent
  ]
})
export class PagesModule {}
