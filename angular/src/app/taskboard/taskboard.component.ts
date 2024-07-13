import { Component, OnInit } from "@angular/core";

import { Taskboard } from "./taskboard";
import { TaskboardService } from "./taskboard.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-taskboard",
  templateUrl: "./taskboard.component.html",
  styleUrls: ["./taskboard.component.scss"]
})
export class TaskboardComponent implements OnInit {
  taskboard: Taskboard[] = [];
  tasks;
  showNavigationArrows = false;
  ngOnInit(): void {
    this.getTaskboard();
  }

  constructor(private taskboardService: TaskboardService) {}

  getTaskboard(): void {
    this.taskboardService
      .getAll()
      .pipe(first())
      .subscribe(taskboard => {
        this.taskboard = taskboard;
        this.tasks = Object.keys(this.taskboard);
      });
  }
}
