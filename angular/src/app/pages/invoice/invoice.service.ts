import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Invoice } from "./invoice";

@Injectable({ providedIn: "root" })
export class InvoiceService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Invoice[]>(`/api/invoice`);
  }
}
