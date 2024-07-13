import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Timeline } from "./timeline";

@Injectable({ providedIn: "root" })
export class TimelineService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Timeline[]>(`/api/timeline`);
  }
}
