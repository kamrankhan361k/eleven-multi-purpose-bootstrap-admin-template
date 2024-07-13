import { MessagesComponent } from "./messages.component";
import { Routes } from "@angular/router";

export const MessagesRoutes: Routes = [
  {
    path: "",
    component: MessagesComponent,
    data: {
      removeHeader: true,
      removeFooter: true
    }
  }
];
