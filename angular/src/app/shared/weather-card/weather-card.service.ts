import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class WeatherCardService {
  constructor(private http: HttpClient) {}

  getData(city, country, days) {
    return this.http.get(
      `//api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=YOUR_WEATHER_API&cnt=${days}&units=metric`
    );
  }
}
