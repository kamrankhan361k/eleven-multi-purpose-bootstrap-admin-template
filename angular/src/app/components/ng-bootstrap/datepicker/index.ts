import {
  NgbdDatepickerCalendars,
  NgbdIslamicCivil,
  NgbdIslamicUmalqura
} from "./calendars/datepicker-calendars";

import { NgbdDatepickerAdapter } from "./adapter/datepicker-adapter";
import { NgbdDatepickerBasic } from "./basic/datepicker-basic";
import { NgbdDatepickerConfig } from "./config/datepicker-config";
import { NgbdDatepickerCustomday } from "./customday/datepicker-customday";
import { NgbdDatepickerDisabled } from "./disabled/datepicker-disabled";
import { NgbdDatepickerHebrew } from "./hebrew/datepicker-hebrew";
import { NgbdDatepickerI18n } from "./i18n/datepicker-i18n";
import { NgbdDatepickerJalali } from "./jalali/datepicker-jalali";
import { NgbdDatepickerMultiple } from "./multiple/datepicker-multiple";
import { NgbdDatepickerPopup } from "./popup/datepicker-popup";
import { NgbdDatepickerRange } from "./range/datepicker-range";

export const DATEPICKER_DIRECTIVES = [
  NgbdDatepickerBasic,
  NgbdDatepickerPopup,
  NgbdDatepickerDisabled,
  NgbdDatepickerI18n,
  NgbdDatepickerCustomday,
  NgbdDatepickerConfig,
  NgbdDatepickerMultiple,
  NgbdDatepickerCalendars,
  NgbdDatepickerRange,
  NgbdIslamicCivil,
  NgbdIslamicUmalqura,
  NgbdDatepickerAdapter,
  NgbdDatepickerHebrew,
  NgbdDatepickerJalali
];
