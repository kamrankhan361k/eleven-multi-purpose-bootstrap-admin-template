import { CommonModule } from "@angular/common";
import { MediaComponent } from "./media.component";
import { MediaRoutes } from "./media.routing";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(MediaRoutes)],
  declarations: [MediaComponent]
})
export class MediaModule {}
