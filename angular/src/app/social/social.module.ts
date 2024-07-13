import { CommonModule } from "@angular/common";
import { ElevenSharedModule } from "../shared";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SocialComponent } from "./social.component";
import { SocialRoutes } from "./social.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SocialRoutes),
    ElevenSharedModule
  ],
  declarations: [SocialComponent]
})
export class SocialModule {}
