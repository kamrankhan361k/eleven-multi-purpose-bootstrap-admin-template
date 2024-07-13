import { FullcalendarComponent } from "./fullcalendar.component";
import { Routes } from "@angular/router";

export const FullcalendarRoutes: Routes = [
  {
    path: "",
    component: FullcalendarComponent,
    data: {
      heading: "Calendar"
    }
  }
];
