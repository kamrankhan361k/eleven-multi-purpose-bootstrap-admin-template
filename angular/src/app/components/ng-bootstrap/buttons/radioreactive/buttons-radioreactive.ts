import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  // tslint:disable-next-line:component-selector
  selector: "ngbd-buttons-radioreactive",
  templateUrl: "./buttons-radioreactive.html"
})
// tslint:disable-next-line:component-class-suffix
export class NgbdButtonsRadioreactive implements OnInit {
  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
