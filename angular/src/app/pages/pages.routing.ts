import { BlankComponent } from "./blank/blank.component";
import { InvoiceComponent } from "./invoice/invoice.component";
import { PricingComponent } from "./pricing/pricing.component";
import { Routes } from "@angular/router";
import { TimelineComponent } from "./timeline/timeline.component";

export const PagesRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "invoice",
        component: InvoiceComponent
      },
      {
        path: "blank",
        component: BlankComponent
      },
      {
        path: "pricing",
        component: PricingComponent
      },
      {
        path: "timeline",
        component: TimelineComponent
      }
    ]
  }
];
