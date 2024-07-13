import { ChartlibComponent } from "./chartlib.component";
import { ChartlibRoutes } from "./chartlib.routing";
import { ChartsModule } from "ng2-charts";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(ChartlibRoutes), ChartsModule],
  declarations: [ChartlibComponent]
})
export class ChartlibModule {}
