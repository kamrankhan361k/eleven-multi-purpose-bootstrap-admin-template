import { Card, CardBody, CardHeader } from "reactstrap";

import SimpleReactValidator from "simple-react-validator";
import moment from "moment";
import { useState } from "react";

let validator = new SimpleReactValidator({
  autoForceUpdate: this,
  className: "text-danger",
  messages: {
    email: "That is not an email."
  },
  validators: {
    ip: {
      message: "The :attribute must be a valid IP address.",
      rule: function(val, params, validator) {
        return (
          validator.helpers.testRegex(
            val,
            /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/i
          ) && params.indexOf(val) === -1
        );
      }
    }
  }
});

const Validation = () => {
  const [ajaxError] = useState(
    "There was a server error the prevented the form from submitting."
  );
  const [inputs, setInputs] = useState({});

  const submitForm = () => {
    if (validator.allValid()) {
      alert("You submitted the form and stuff!");
    } else {
      validator.showMessages();
    }
  };

  const handleInputChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setInputs({ ...inputs, [`${name}`]: value });
  };

  const example = (name, value, rules, type = "text") => {
    value = value || inputs[name];
    rules = rules || name;
    return (
      <div className="col-sm-6 col-md-4">
        <div className="form-group">
          <label>{name}</label>
          <input
            className="form-control"
            type={type}
            name={name}
            value={inputs[name]}
            onChange={handleInputChange}
            onBlur={() => validator.showMessageFor(name)}
          />
          {validator.message(name, value, rules)}
        </div>
      </div>
    );
  };

  return (
    <Card>
      <CardHeader>Validations</CardHeader>
      <CardBody>
        <div className="row">
          <div className="col-sm-6 col-md-4">
            <div className="form-check">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  name="accepted"
                  className="form-check-input"
                  checked={inputs.accepted}
                  onChange={handleInputChange}
                />
                <span>accepted</span>
              </label>
              {validator.message("checkbox", inputs.accepted, "accepted")}
            </div>
          </div>

          {example(
            "after",
            inputs.after && moment(inputs.after, "YYYY-MM-DD"),
            [{ after: moment().add(1, "month") }],
            "date"
          )}
          {example(
            "after_or_equal",
            inputs.after_or_equal &&
              moment(inputs.after_or_equal, "YYYY-MM-DD"),
            [{ after_or_equal: moment().add(1, "month") }],
            "date"
          )}
          {example("alpha")}
          {example("alpha_space")}
          {example("alpha_num")}
          {example("alpha_num_space")}
          {example("alpha_num_dash")}
          {example("alpha_num_dash_space")}
          {example("array")}
          {example(
            "before",
            inputs.before && moment(inputs.before, "YYYY-MM-DD"),
            [{ before: moment().add(1, "month") }],
            "date"
          )}
          {example(
            "before_or_equal",
            inputs.before_or_equal &&
              moment(inputs.before_or_equal, "YYYY-MM-DD"),
            [{ before_or_equal: moment().add(1, "month") }],
            "date"
          )}
          {example("between", inputs.between, "between:10,20")}
          {example("boolean")}
          {example("card_exp")}
          {example("card_num")}
          {example("currency")}
          {example(
            "date",
            inputs.date && moment(inputs.date, "YYYY-MM-DD"),
            "date",
            "date"
          )}
          {example(
            "date_equals",
            inputs.date_equals && moment(inputs.date_equals, "YYYY-MM-DD"),
            [{ date_equals: moment() }],
            "date"
          )}
          {example("email")}
          {example("in", inputs.in, "in:stu,stuart,stuman")}
          {example("integer")}
          {example("max", inputs.max, "max:20")}
          {example("min", inputs.min, "min:20,num")}
          {example("not_in", inputs.not_in, [
            "required",
            { not_in: ["stu", "stuart"] }
          ])}
          {example("not_regex", inputs.not_regex, "not_regex:^A*$")}
          {example("numeric")}
          {example("phone")}
          {example("regex", inputs.regex, "regex:^A*$")}
          {example("required")}
          {example("size", inputs.size, "size:20,num")}
          {example("string")}
          {example("typeof", inputs.typeof, [{ typeof: "string" }])}
          {example("url")}
          {example("ip", inputs.ip, "ip:127.0.0.1")}
        </div>

        {validator.messageWhenPresent(ajaxError, {
          element: message => (
            <div className="alert alert-warning" role="alert">
              {message}
            </div>
          )
        })}

        <button className="btn btn-primary" onClick={submitForm}>
          Submit
        </button>
      </CardBody>
    </Card>
  );
};

export default Validation;
