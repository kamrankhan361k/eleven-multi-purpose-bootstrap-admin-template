import { RouterModule, Routes } from "@angular/router";

import { AdminLayoutComponent } from "./layout";
import { AuthLayoutComponent } from "./layout";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "widgets",
        loadChildren: "./widgets/widgets.module#WidgetsModule"
      },
      {
        path: "charts",
        loadChildren: "./chartlib/chartlib.module#ChartlibModule"
      },
      {
        path: "mapbox",
        loadChildren: "./mapbox/mapbox.module#MapboxModule"
      },
      {
        path: "calendar",
        loadChildren: "./fullcalendar/fullcalendar.module#FullcalendarModule"
      },
      {
        path: "components",
        loadChildren: "./components/components.module#ComponentsModule"
      },
      {
        path: "messages",
        loadChildren: "./messages/messages.module#MessagesModule"
      },
      {
        path: "table",
        loadChildren: "./table/table.module#TableModule"
      },
      {
        path: "form",
        loadChildren: "./form/form.module#FormModule"
      },
      {
        path: "taskboard",
        loadChildren: "./taskboard/taskboard.module#TaskboardModule"
      },
      {
        path: "media",
        loadChildren: "./media/media.module#MediaModule"
      },
      {
        path: "pages",
        loadChildren: "./pages/pages.module#PagesModule"
      },
      {
        path: "social",
        loadChildren: "./social/social.module#SocialModule"
      }
    ]
  },
  {
    path: "",
    component: AuthLayoutComponent,
    children: [
      {
        path: "authentication",
        loadChildren:
          "./authentication/authentication.module#AuthenticationModule"
      },
      {
        path: "error",
        loadChildren: "./error/error.module#ErrorModule"
      }
    ]
  },
  {
    path: "**",
    redirectTo: "error/404"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
