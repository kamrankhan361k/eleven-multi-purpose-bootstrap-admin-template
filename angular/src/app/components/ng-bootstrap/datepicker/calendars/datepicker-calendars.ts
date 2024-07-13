import { Component, Injectable } from "@angular/core";
import {
  NgbCalendar,
  NgbCalendarIslamicCivil,
  NgbCalendarIslamicUmalqura,
  NgbDateStruct,
  NgbDatepickerI18n
} from "@ng-bootstrap/ng-bootstrap";

const I18N_VALUES = {
  weekdays: ["ن", "ث", "ر", "خ", "ج", "س", "ح"],
  months: [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الآخر",
    "جمادى الأولى",
    "جمادى الآخرة",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة"
  ]
};

@Injectable()
export class IslamicI18n extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) {
    return I18N_VALUES.weekdays[weekday - 1];
  }

  getMonthShortName(month: number) {
    return I18N_VALUES.months[month - 1];
  }

  getMonthFullName(month: number) {
    return this.getMonthShortName(month);
  }

  getDayAriaLabel(date: NgbDateStruct): string {
    return `${date.day}-${date.month}-${date.year}`;
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-datepicker-calendars",
  templateUrl: "./datepicker-calendars.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdDatepickerCalendars {}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-islamic-civil",
  templateUrl: "./islamic-calendars.html",
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicCivil },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdIslamicCivil {
  name = "Civil";
  model: NgbDateStruct;
  date: { year: number; month: number };

  constructor(private calendar: NgbCalendar) {}

  selectToday() {
    this.model = this.calendar.getToday();
  }
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-islamic-umalqura",
  templateUrl: "./islamic-calendars.html",
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarIslamicUmalqura },
    { provide: NgbDatepickerI18n, useClass: IslamicI18n }
  ]
})
// tslint:disable-next-line:component-class-suffix
export class NgbdIslamicUmalqura extends NgbdIslamicCivil {
  name = "Umalqura";
}
