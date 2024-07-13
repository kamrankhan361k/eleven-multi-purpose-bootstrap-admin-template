import { NgbdTooltipAutoclose } from "./autoclose/tooltip-autoclose";
import { NgbdTooltipBasic } from "./basic/tooltip-basic";
import { NgbdTooltipConfig } from "./config/tooltip-config";
import { NgbdTooltipContainer } from "./container/tooltip-container";
import { NgbdTooltipCustomclass } from "./customclass/tooltip-customclass";
import { NgbdTooltipTplcontent } from "./tplcontent/tooltip-tplcontent";
import { NgbdTooltipTplwithcontext } from "./tplwithcontext/tooltip-tplwithcontext";
import { NgbdTooltipTriggers } from "./triggers/tooltip-triggers";

export const TOOLTIP_DIRECTIVES = [
  NgbdTooltipBasic,
  NgbdTooltipContainer,
  NgbdTooltipTplcontent,
  NgbdTooltipTriggers,
  NgbdTooltipConfig,
  NgbdTooltipTplwithcontext,
  NgbdTooltipAutoclose,
  NgbdTooltipCustomclass
];
