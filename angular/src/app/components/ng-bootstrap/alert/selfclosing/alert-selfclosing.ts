import { Component, OnInit } from "@angular/core";

import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-alert-selfclosing",
  templateUrl: "./alert-selfclosing.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdAlertSelfclosing implements OnInit {
  private success = new Subject<string>();

  staticAlertClosed = false;
  successMessage: string;

  ngOnInit(): void {
    setTimeout(() => (this.staticAlertClosed = true), 20000);

    this.success.subscribe(message => (this.successMessage = message));
    this.success
      .pipe(debounceTime(5000))
      .subscribe(() => (this.successMessage = null));
  }

  public changeSuccessMessage() {
    this.success.next(`${new Date()} - Message successfully changed.`);
  }
}
