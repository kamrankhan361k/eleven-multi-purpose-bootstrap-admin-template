import { Component, OnInit } from "@angular/core";

import { Chart } from "./chart";
import { ChartlibService } from "./chartlib.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-chartlib",
  templateUrl: "./chartlib.component.html",
  styleUrls: ["./chartlib.component.scss"]
})
export class ChartlibComponent implements OnInit {
  chartData: Chart[] = [];
  ngOnInit(): void {
    this.getChartData();
  }

  constructor(private chartlibService: ChartlibService) {}

  getChartData(): void {
    this.chartlibService
      .getAll()
      .pipe(first())
      .subscribe(chart => {
        this.chartData = chart;
      });
  }
}
