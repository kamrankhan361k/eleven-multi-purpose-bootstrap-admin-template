import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Pricing } from "./pricing";

@Injectable({ providedIn: "root" })
export class PricingService {
  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Pricing[]>(`/api/pricing`);
  }
}
