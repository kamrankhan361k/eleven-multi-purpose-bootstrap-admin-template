import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthenticationRoutes } from "./authentication.routing";
import { CommonModule } from "@angular/common";
import { ElevenSharedModule } from "../shared";
import { ForgotComponent } from "./forgot/forgot.component";
import { LockscreenComponent } from "./lockscreen/lockscreen.component";
import { NgModule } from "@angular/core";
import { NgxValidatorModule } from "@why520crazy/ngx-validator";
import { RouterModule } from "@angular/router";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthenticationRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgxValidatorModule,
    ElevenSharedModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotComponent,
    LockscreenComponent
  ]
})
export class AuthenticationModule {}
