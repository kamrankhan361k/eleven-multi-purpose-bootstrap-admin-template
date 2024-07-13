import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Message } from "./message";

@Injectable({ providedIn: "root" })
export class MessagesService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Message[]>(`/api/messages`);
  }

  getOne(id) {
    return this.http.get(`/api/messages/${id}`);
  }
}
