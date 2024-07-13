import { BasicComponent } from "./basic/basic.component";
import { EditorComponent } from "./editor/editor.component";
import { Routes } from "@angular/router";
import { ValidationComponent } from "./validation/validation.component";

export const FormRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "basic",
        component: BasicComponent
      },
      {
        path: "editor",
        component: EditorComponent
      },
      {
        path: "validation",
        component: ValidationComponent
      }
    ]
  }
];
