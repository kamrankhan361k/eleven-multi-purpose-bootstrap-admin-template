import { CalendarModule, DateAdapter } from "angular-calendar";

import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FullcalendarComponent } from "./fullcalendar.component";
import { FullcalendarRoutes } from "./fullcalendar.routing";
import { NgModule } from "@angular/core";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(FullcalendarRoutes),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule
  ],
  declarations: [FullcalendarComponent]
})
export class FullcalendarModule {}
