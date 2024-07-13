import { BasicComponent } from "./basic/basic.component";
import { ResponsiveComponent } from "./responsive/responsive.component";
import { Routes } from "@angular/router";

export const TableRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "basic",
        component: BasicComponent,
        data: {
          heading: "Basic table"
        }
      },
      {
        path: "responsive",
        component: ResponsiveComponent,
        data: {
          heading: "Responsive"
        }
      }
    ]
  }
];
