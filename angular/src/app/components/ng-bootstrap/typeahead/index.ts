import { NgbdTypeaheadBasic } from "./basic/typeahead-basic";
import { NgbdTypeaheadConfig } from "./config/typeahead-config";
import { NgbdTypeaheadFocus } from "./focus/typeahead-focus";
import { NgbdTypeaheadFormat } from "./format/typeahead-format";
import { NgbdTypeaheadHttp } from "./http/typeahead-http";
import { NgbdTypeaheadTemplate } from "./template/typeahead-template";

export const TYPEAHEAD_DIRECTIVES = [
  NgbdTypeaheadFormat,
  NgbdTypeaheadHttp,
  NgbdTypeaheadBasic,
  NgbdTypeaheadFocus,
  NgbdTypeaheadTemplate,
  NgbdTypeaheadConfig
];
