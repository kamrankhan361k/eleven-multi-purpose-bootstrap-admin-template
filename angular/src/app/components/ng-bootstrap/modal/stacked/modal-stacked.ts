import { NgbActiveModal, NgbModal } from "@ng-bootstrap/ng-bootstrap";

import { Component } from "@angular/core";

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
      <p>
        <button class="btn btn-lg btn-outline-primary" (click)="open()">
          Launch demo modal
        </button>
      </p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModal1Content {
  constructor(
    private modalService: NgbModal,
    public activeModal: NgbActiveModal
  ) {}

  open() {
    this.modalService.open(NgbdModal2Content, {
      size: "lg"
    });
  }
}

@Component({
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, World!</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModal2Content {
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-modal-stacked",
  templateUrl: "./modal-stacked.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdModalStacked {
  constructor(private modalService: NgbModal) {}

  open() {
    this.modalService.open(NgbdModal1Content);
  }
}
