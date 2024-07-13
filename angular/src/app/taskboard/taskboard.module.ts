import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { TaskboardComponent } from "./taskboard.component";
import { TaskboardRoutes } from "./taskboard.routing";

@NgModule({
  imports: [CommonModule, RouterModule.forChild(TaskboardRoutes), NgbModule],
  declarations: [TaskboardComponent]
})
export class TaskboardModule {}
