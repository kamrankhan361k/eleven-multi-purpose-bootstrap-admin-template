import { BasicComponent } from "./basic/basic.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ResponsiveComponent } from "./responsive/responsive.component";
import { RouterModule } from "@angular/router";
import { TableRoutes } from "./table.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TableRoutes)],
  declarations: [BasicComponent, ResponsiveComponent]
})
export class TableModule {}
