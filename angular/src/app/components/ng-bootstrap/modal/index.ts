import {
  NgbdModal1Content,
  NgbdModal2Content,
  NgbdModalStacked
} from "./stacked/modal-stacked";
import {
  NgbdModalComponent,
  NgbdModalContent
} from "./component/modal-component";

import { NgbdModalBasic } from "./basic/modal-basic";
import { NgbdModalConfig } from "./config/modal-config";
import { NgbdModalCustomclassComponent } from "./customclass/modal-customclass";
import { NgbdModalOptions } from "./options/modal-options";

export const MODAL_DIRECTIVES = [
  NgbdModalBasic,
  NgbdModalComponent,
  NgbdModalCustomclassComponent,
  NgbdModalConfig,
  NgbdModalOptions,
  NgbdModalStacked,
  NgbdModal1Content,
  NgbdModal2Content
];
export { NgbdModalContent } from "./component/modal-component";
