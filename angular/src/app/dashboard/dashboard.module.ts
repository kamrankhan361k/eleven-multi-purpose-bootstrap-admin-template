import { ChartsModule } from "ng2-charts";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard.component";
import { DashboardRoutes } from "./dashboard.routing";
import { ElevenSharedModule } from "../shared";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    ElevenSharedModule,
    ChartsModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {}
