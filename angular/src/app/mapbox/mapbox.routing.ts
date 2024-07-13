import { LocationComponent } from "./location/location.component";
import { MarkersComponent } from "./markers/markers.component";
import { Routes } from "@angular/router";

export const MapboxRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "markers",
        component: MarkersComponent,
        data: {
          removeFooter: true
        }
      },
      {
        path: "location",
        component: LocationComponent,
        data: {
          removeHeader: true,
          removeFooter: true
        }
      }
    ]
  }
];
