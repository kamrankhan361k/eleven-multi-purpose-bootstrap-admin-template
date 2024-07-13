import { Activity } from "./activity";
import { Contact } from "./contact";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class SocialService {
  constructor(private http: HttpClient) {}

  getActivity() {
    return this.http.get<Activity[]>(`/api/activity`);
  }

  getContacts() {
    return this.http.get<Contact[]>(`/api/contacts`);
  }
}
