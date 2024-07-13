import { Component, ViewEncapsulation } from "@angular/core";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-modal-customclass",
  templateUrl: "./modal-customclass.html",
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
    `
  ]
})
export class NgbdModalCustomclassComponent {
  closeResult: string;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content, { windowClass: "dark-modal" });
  }
}
