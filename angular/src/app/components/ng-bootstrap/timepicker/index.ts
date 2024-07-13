import { NgbdTimepickerAdapter } from "./adapter/timepicker-adapter";
import { NgbdTimepickerBasic } from "./basic/timepicker-basic";
import { NgbdTimepickerConfig } from "./config/timepicker-config";
import { NgbdTimepickerMeridian } from "./meridian/timepicker-meridian";
import { NgbdTimepickerSeconds } from "./seconds/timepicker-seconds";
import { NgbdTimepickerSpinners } from "./spinners/timepicker-spinners";
import { NgbdTimepickerSteps } from "./steps/timepicker-steps";
import { NgbdTimepickerValidation } from "./validation/timepicker-validation";

export const TIMEPICKER_DIRECTIVES = [
  NgbdTimepickerBasic,
  NgbdTimepickerMeridian,
  NgbdTimepickerSeconds,
  NgbdTimepickerSpinners,
  NgbdTimepickerSteps,
  NgbdTimepickerValidation,
  NgbdTimepickerConfig,
  NgbdTimepickerAdapter
];
