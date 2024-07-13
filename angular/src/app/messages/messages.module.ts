import { CommonModule } from "@angular/common";
import { ElevenSharedModule } from "../shared";
import { MessagesComponent } from "./messages.component";
import { MessagesRoutes } from "./messages.routing";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MessagesRoutes),
    ElevenSharedModule
  ],
  declarations: [MessagesComponent]
})
export class MessagesModule {}
