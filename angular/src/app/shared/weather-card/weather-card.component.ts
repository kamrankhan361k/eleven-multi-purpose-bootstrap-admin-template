import {
  Component,
  HostBinding,
  HostListener,
  Input,
  NgZone,
  OnInit
} from "@angular/core";
import { capitalize, weatherIcons } from "../../helpers";

import { WeatherCardService } from "./weather-card.service";
import { first } from "rxjs/operators";
import format from "date-fns/format";

@Component({
  selector: "app-weather-card",
  template: `
    <div class="mb-4 card" *ngIf="weatherData">
      <div class="pb-0 card-body">
        <div class="d-flex mb-4 justify-content-between align-items-center">
          <div>
            <h5 class="mb-0 font-weight-bold">
              {{ weatherData.city.name }}, {{ weatherData.city.country }}
            </h5>
            <h6 class="mb-0">
              {{ getFormatedDate(weatherData.list[0].dt, "MMMM Do yyyy") }}
            </h6>
            <small>{{
              getCapitalizedWord(weatherData.list[0].weather[0].description)
            }}</small>
          </div>
          <div class="text-right">
            <h3 class="font-weight-light mb-0">
              <span>{{ weatherData.list[0].main.temp }}&deg;</span>
            </h3>
          </div>
        </div>
        <div
          class="d-flex justify-content-between align-items-center"
          style="flex-wrap: wrap;"
        >
          <div style="width: 50%;" *ngFor="let description of descriptionItems">
            <div class="d-flex mb-2 justify-content-between align-items-center">
              <span>{{ getCapitalizedWord(description) }}</span>
              <small class="px-2 d-inline-block">{{
                weatherData.list[0].main[description]
              }}</small>
            </div>
          </div>
        </div>
      </div>
      <div class="divider">
        <span class="divider-inner">
          <small>Forecast</small>
        </span>
      </div>
      <div class="pt-0 card-body">
        <div
          class="text-center justify-content-between align-items-center d-flex"
          style="flex-flow: initial;"
        >
          <div
            class="text-center mb-0 d-flex align-items-center justify-content-center flex-column"
            *ngFor="let day of weatherData.list"
          >
            <span style="display: block; margin: 2px 0px;">{{
              getFormatedDate(day.dt, "EEE")
            }}</span>
            <span style="display: block; margin: 2px 0px;">{{
              day.weather.description
            }}</span>
            <span style="display: block; margin: 2px 0px;">
              <span class="animated-icon">
                <app-animated-icon
                  style="width:24px;height:24px"
                  [path]="getWeatherIcon(day.weather[0].icon)"
                  autoPlay="true"
                  size="24px"
                ></app-animated-icon>
              </span>
            </span>
            <span style="display: block; margin: 2px 0px;"
              >{{ day.main.temp }}°</span
            >
          </div>
        </div>
      </div>
    </div>
  `
})
export class WeatherCardComponent implements OnInit {
  @Input() city: string;
  @Input() country: string;
  @Input() days: number;

  weatherData;
  descriptionItems;
  ngOnInit(): void {
    this.getWeatherData();
  }

  constructor(private weatherCardService: WeatherCardService) {}

  getWeatherData(): void {
    if (this.city && this.country && this.days) {
      this.weatherCardService
        .getData(this.city, this.country, this.days)
        .pipe(first())
        .subscribe(data => {
          this.weatherData = data;
          this.descriptionItems = Object.keys(this.weatherData.list[0].main);
        });
    }
  }

  getFormatedDate(date, dateFormat) {
    return format(date * 1000, dateFormat);
  }

  getCapitalizedWord(word) {
    return capitalize(word.replace(/_/g, " "));
  }

  getWeatherIcon(icon) {
    return weatherIcons[icon];
  }
}
