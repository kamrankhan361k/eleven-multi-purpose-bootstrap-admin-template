import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Taskboard } from "./taskboard";

@Injectable({ providedIn: "root" })
export class TaskboardService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Taskboard[]>(`/api/taskboard`);
  }
}
