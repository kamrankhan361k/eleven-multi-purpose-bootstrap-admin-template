import { Component, OnInit } from "@angular/core";

import { Activity } from "./activity";
import { Contact } from "./contact";
import { SocialService } from "./social.service";
import { first } from "rxjs/operators";
import { randomStatus } from "../helpers";

@Component({
  selector: "app-social",
  templateUrl: "./social.component.html",
  styleUrls: ["./social.component.scss"]
})
export class SocialComponent implements OnInit {
  tab = "activity";
  activity: Activity[] = [];
  contacts: Contact[] = [];
  ngOnInit(): void {
    this.getData();
  }

  constructor(private socialService: SocialService) {}

  getData(): void {
    this.socialService
      .getActivity()
      .pipe(first())
      .subscribe(activity => {
        this.activity = activity;
      });

    this.socialService
      .getContacts()
      .pipe(first())
      .subscribe(contacts => {
        this.contacts = contacts;
      });
  }

  getStatus() {
    const status = randomStatus();
    return status;
  }
}
