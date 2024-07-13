import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AccordionComponent } from "./accordion/accordion.component";
import { AlertComponent } from "./alert/alert.component";
import { ButtonsComponent } from "./buttons/buttons.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { CollapseComponent } from "./collapse/collapse.component";
import { CommonModule } from "@angular/common";
import { ComponentsRoutes } from "./components.routing";
import { DatepickerComponent } from "./datepicker/datepicker.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { ModalComponent } from "./modal/modal.component";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbdDemoModule } from "./ng-bootstrap";
import { PaginationComponent } from "./pagination/pagination.component";
import { PopoverComponent } from "./popover/popover.component";
import { ProgressComponent } from "./progress/progress.component";
import { RatingComponent } from "./rating/rating.component";
import { RouterModule } from "@angular/router";
import { TabsComponent } from "./tabs/tabs.component";
import { TimepickerComponent } from "./timepicker/timepicker.component";
import { TooltipComponent } from "./tooltip/tooltip.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbdDemoModule
  ],
  declarations: [
    ButtonsComponent,
    ProgressComponent,
    PaginationComponent,
    AccordionComponent,
    AlertComponent,
    CarouselComponent,
    CollapseComponent,
    DatepickerComponent,
    DropdownComponent,
    ModalComponent,
    PopoverComponent,
    RatingComponent,
    TabsComponent,
    TimepickerComponent,
    TooltipComponent,
    TypeaheadComponent
  ]
})
export class ComponentsModule {}
