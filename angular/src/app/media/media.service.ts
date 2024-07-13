import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Media } from "./media";

@Injectable({ providedIn: "root" })
export class MediaService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Media[]>(`/api/media`);
  }
}
