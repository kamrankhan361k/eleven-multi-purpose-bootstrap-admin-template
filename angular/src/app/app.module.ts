import {
  AdminLayoutComponent,
  AnchorItemComponent,
  AuthLayoutComponent,
  FooterComponent,
  HeaderComponent,
  LayoutComponent,
  ListItemComponent,
  MenuComponent,
  MultilevelMenuComponent,
  SidebarComponent
} from "./layout";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { ElevenSharedModule } from "./shared";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoadingBarModule } from "@ngx-loading-bar/core";
import { LoadingBarRouterModule } from "@ngx-loading-bar/router";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";
import { NgxValidatorModule } from "@why520crazy/ngx-validator";
import { fakeBackendProvider } from "./_mock/backend";
import player from "lottie-web";

export function playerFactory() {
  return player;
}

const DEFAULT_GLOBAL_VALIDATION_MESSAGES = {
  required: "This field cannot be empty",
  maxlength: "The length of this field cannot be greater than {requiredLength}",
  minlength: "The length of this field cannot be less than {requiredLength}",
  ngxUniqueCheck: "The input value already exists, please re-enter",
  email: "The format of the input message is incorrect",
  repeat: "Inconsistent input twice",
  pattern: "The option input format is incorrect",
  number: "Must enter a number",
  url: "The input URL format is incorrect",
  max: "The input value of this field cannot be greater than {max}",
  min: "The input value of this field cannot be less than {min}"
};

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    LayoutComponent,
    MultilevelMenuComponent,
    ListItemComponent,
    AnchorItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    ElevenSharedModule,
    FormsModule,
    AppRoutingModule,
    NgxValidatorModule.forRoot({
      globalValidationMessages: DEFAULT_GLOBAL_VALIDATION_MESSAGES,
      validateOn: "blur"
    }),
    NgxMapboxGLModule.withConfig({
      accessToken:
        "YOUR_MAPBOX_API"
    }),
    LoadingBarRouterModule,
    LoadingBarModule
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent]
})
export class AppModule {}
