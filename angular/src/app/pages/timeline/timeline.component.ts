import { Component, OnInit } from "@angular/core";

import { Timeline } from "./timeline";
import { TimelineService } from "./timeline.service";
import { first } from "rxjs/operators";
import { formatDistanceToNow } from "date-fns";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.scss"]
})
export class TimelineComponent implements OnInit {
  timeline: Timeline[] = [];
  ngOnInit(): void {
    this.getTimeline();
  }

  constructor(private timelineService: TimelineService) {}

  getTimeline(): void {
    this.timelineService
      .getAll()
      .pipe(first())
      .subscribe(timeline => {
        this.timeline = timeline;
      });
  }

  getTimeAgo(date): string {
    return formatDistanceToNow(date);
  }
}
