import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { BasicComponent } from "./basic/basic.component";
import { CommonModule } from "@angular/common";
import { EditorComponent } from "./editor/editor.component";
import { FormRoutes } from "./form.routing";
import { NgModule } from "@angular/core";
import { NgbProgressbarModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxValidatorModule } from "@why520crazy/ngx-validator";
import { RouterModule } from "@angular/router";
import { ValidationComponent } from "./validation/validation.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FormRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    NgxValidatorModule
  ],
  declarations: [BasicComponent, EditorComponent, ValidationComponent]
})
export class FormModule {}
