import { NgbdPopoverAutoclose } from "./autoclose/popover-autoclose";
import { NgbdPopoverBasic } from "./basic/popover-basic";
import { NgbdPopoverConfig } from "./config/popover-config";
import { NgbdPopoverContainer } from "./container/popover-container";
import { NgbdPopoverCustomclass } from "./customclass/popover-customclass";
import { NgbdPopoverTplcontent } from "./tplcontent/popover-tplcontent";
import { NgbdPopoverTplwithcontext } from "./tplwithcontext/popover-tplwithcontext";
import { NgbdPopoverTriggers } from "./triggers/popover-triggers";
import { NgbdPopoverVisibility } from "./visibility/popover-visibility";

export const POPOVER_DIRECTIVES = [
  NgbdPopoverBasic,
  NgbdPopoverTplcontent,
  NgbdPopoverTplwithcontext,
  NgbdPopoverTriggers,
  NgbdPopoverVisibility,
  NgbdPopoverContainer,
  NgbdPopoverConfig,
  NgbdPopoverAutoclose,
  NgbdPopoverCustomclass
];
