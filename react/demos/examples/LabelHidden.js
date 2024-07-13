import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import React from "react";

export default class Example extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup className="mr-1">
          <Label for="exampleEmail" hidden>
            Email
          </Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup className="mr-1">
          <Label for="examplePassword" hidden>
            Password
          </Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Password"
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
