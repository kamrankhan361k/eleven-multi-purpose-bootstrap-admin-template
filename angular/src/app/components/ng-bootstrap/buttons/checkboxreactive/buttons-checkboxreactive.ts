import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-buttons-checkboxreactive",
  templateUrl: "./buttons-checkboxreactive.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdButtonsCheckboxreactive implements OnInit {
  public checkboxGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });
  }
}
