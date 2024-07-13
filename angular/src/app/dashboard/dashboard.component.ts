import { Component, OnInit } from "@angular/core";

import { DashboardService } from "./dashboard.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  postCardImages = [
    `assets/images/unsplash/1.jpg`,
    `assets/images/unsplash/15.jpg`
  ];

  dashboardData;
  ngOnInit(): void {
    this.getData();
  }

  constructor(private dashboardService: DashboardService) {}

  getData(): void {
    this.dashboardService
      .getAll()
      .pipe(first())
      .subscribe(data => {
        this.dashboardData = data;
      });
  }
}
