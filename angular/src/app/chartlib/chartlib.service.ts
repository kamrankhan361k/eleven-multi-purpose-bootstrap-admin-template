import { Chart } from "./chart";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ChartlibService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Chart[]>(`/api/charts`);
  }
}
