import { Component } from "@angular/core";
import { NgxValidatorConfig } from "@why520crazy/ngx-validator";
import { delay } from "rxjs/operators";
import { of } from "rxjs";

@Component({
  selector: "app-validation",
  templateUrl: "./validation.component.html",
  styleUrls: ["./validation.component.scss"]
})
export class ValidationComponent {
  message = "";

  showSex = false;

  validateOn = false;

  loadingDone = true;

  model = {
    username: "",
    email: "",
    password: "",
    number: "",
    sex: "",
    customSelectValue: ""
  };

  validatorConfig: NgxValidatorConfig = {
    validateOn: this.validateOn ? "blur" : "submit"
  };

  changeValidateOn() {
    this.loadingDone = false;
    this.validatorConfig.validateOn = this.validateOn ? "blur" : "submit";
    setTimeout(() => {
      this.loadingDone = true;
    }, 0);
  }

  checkUsername(value: string) {
    return value === "peter"
      ? of(true).pipe(delay(200))
      : of(false).pipe(delay(200));
  }

  setMessage(message: string) {
    this.message = message;
  }

  submit() {
    this.setMessage("This form has submit");
  }
}
