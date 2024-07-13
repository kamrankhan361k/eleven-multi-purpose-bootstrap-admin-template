import { CommonModule } from "@angular/common";
import { LocationComponent } from "./location/location.component";
import { MapboxRoutes } from "./mapbox.routing";
import { MarkersComponent } from "./markers/markers.component";
import { NgModule } from "@angular/core";
import { NgxMapboxGLModule } from "ngx-mapbox-gl";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MapboxRoutes),
    NgxMapboxGLModule.withConfig({
      accessToken:
        "YOUR_MAPBOX_API"
    })
  ],
  declarations: [MarkersComponent, LocationComponent]
})
export class MapboxModule {}
